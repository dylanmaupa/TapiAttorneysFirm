<?php
// ─── CORS & response headers ───────────────────────────────────────────────
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ─── Read JSON or form-encoded body ────────────────────────────────────────
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    $data = $_POST;
}

// ─── Sanitise inputs ───────────────────────────────────────────────────────
function clean($val) {
    return htmlspecialchars(strip_tags(trim($val ?? '')));
}

$name        = clean($data['name']        ?? '');
$email       = clean($data['email']       ?? '');
$phone       = clean($data['phone']       ?? 'Not provided');
$subject     = clean($data['subject']     ?? '');
$message     = clean($data['message']     ?? '');
$practiceArea = clean($data['practiceArea'] ?? 'Not specified');
$urgency     = clean($data['urgency']     ?? 'Normal');

// ─── Validate required fields ──────────────────────────────────────────────
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// ─── Build the email ───────────────────────────────────────────────────────
$to          = 'info@ctattorneys.co.zw';
$emailSubject = "[CT Attorneys] New Inquiry: $subject";

$body = <<<TEXT
NEW CONSULTATION REQUEST
========================
Name:          $name
Email:         $email
Phone:         $phone
Urgency:       $urgency
Practice Area: $practiceArea
Subject:       $subject

Message:
--------
$message

========================
Submitted via ctattorneys.co.zw
TEXT;

$headers  = "From: noreply@ctattorneys.co.zw\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ─── Send ──────────────────────────────────────────────────────────────────
$sent = mail($to, $emailSubject, $body, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Message sent successfully.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send. Please call us directly.']);
}
