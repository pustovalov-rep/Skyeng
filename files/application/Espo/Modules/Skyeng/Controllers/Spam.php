<?php

namespace Espo\Modules\Skyeng\Controllers;

use \Espo\Core\Exceptions\BadRequest;

class Spam extends \Espo\Core\Controllers\Base
{
    public function postActionCreate($params, $data, $request)
    {
        $addres = filter_var($data['id'], FILTER_VALIDATE_EMAIL);
        if ($addres) {
            $container = $this->getContainer();
            $email = $container->get('entityManager')->getEntity('Email');
            $email->set('to', $addres);
            $email->set('subject', 'Skyeng');
            $email->set('body', 'Привет для Skyeng!');
            $email->set('isHtml', FALSE);

//            $emailSender = new \Espo\Core\Mail\Sender($this->getConfig(), $entityManager);
            $emailSender = $container->get('mailSender');
            $emailSender->send($email);
        } else {
            throw new BadRequest();
        }

        return json_encode($data);
    }
}
