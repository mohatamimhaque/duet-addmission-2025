<?php
$token = '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';
$owner = 'mohatamimhaque';
$repo = 'seat-plan';
$path = 'visitorCount.txt';
$branch = 'main';

$headers = [
    "Authorization: token $token",
    "User-Agent: PHP-script"
];

function curlRequest($url, $headers, $method = 'GET', $data = null) {
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
    if ($method === 'PUT' && $data !== null) {
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    }
    $response = curl_exec($ch);
    if (curl_errno($ch)) {
        die('Curl error: ' . curl_error($ch));
    }
    curl_close($ch);
    return $response;
}

$getUrl = "https://api.github.com/repos/$owner/$repo/contents/$path?ref=$branch";
$response = curlRequest($getUrl, $headers);
$fileData = json_decode($response, true);

if (!isset($fileData['sha']) || !isset($fileData['content'])) {
    die('Error fetching file info.');
}

$sha = $fileData['sha'];
$currentContent = base64_decode($fileData['content']);
$currentCount = (int)trim($currentContent);
$newCount = $currentCount + 1;
$newContentBase64 = base64_encode((string)$newCount);

$updateData = json_encode([
    'message' => "Update visitor count to $newCount",
    'content' => $newContentBase64,
    'sha' => $sha,
    'branch' => $branch
]);

$updateResponse = curlRequest($getUrl, $headers, 'PUT', $updateData);
$updateResult = json_decode($updateResponse, true);

if (isset($updateResult['content'])) {
    echo "Visitor count updated successfully: $newCount";
} else {
    echo "Failed to update visitor count.";
    if (isset($updateResult['message'])) {
        echo " Message: " . $updateResult['message'];
    }
}
?>
