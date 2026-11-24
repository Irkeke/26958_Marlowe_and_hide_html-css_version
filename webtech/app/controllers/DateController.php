<?php
// CONTROLLER — coordinates the request: asks the model for data,
// then passes that data to the view. No date logic and no HTML live here.

require_once __DIR__ . '/../models/DateModel.php';

class DateController
{
    public function index()
    {
        $model = new DateModel('Africa/Nairobi');
        $data = $model->getServerDateTime();

        require __DIR__ . '/../views/datetime.view.php';
    }
}
