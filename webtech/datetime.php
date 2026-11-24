<?php
// FRONT CONTROLLER — the only PHP file meant to be requested directly.
// Its only job is to hand the request to the right controller.

require_once __DIR__ . '/app/controllers/DateController.php';

$controller = new DateController();
$controller->index();
