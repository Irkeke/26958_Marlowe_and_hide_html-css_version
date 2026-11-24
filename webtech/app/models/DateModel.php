<?php
// MODEL — the only place that reads the server's clock.
// Returns plain data; knows nothing about HTML or how it will be displayed.

class DateModel
{
    private $timezone;

    public function __construct($timezone = 'Africa/Nairobi')
    {
        $this->timezone = $timezone;
    }

    public function getServerDateTime()
    {
        date_default_timezone_set($this->timezone);

        return array(
            'date'     => date('l, F j, Y'),
            'time'     => date('H:i:s'),
            'timezone' => date('T (P)'),
        );
    }
}
