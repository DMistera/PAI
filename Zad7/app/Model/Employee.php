<?php
 class Employee extends AppModel {
 var $name = 'Employee';
 var $validate = array('nazwisko' => array(
     'rule' => 'notBlank'),
    'etat' => array('rule' => 'notBlank'),
    'placa_pod' => array(
        'ruleMin' => array(
            'rule' =>array('comparison','>=',0),
            'message' => 'Płaca musi być dodatnia',
        ),
        'ruleMax' => array(
            'rule' =>array('comparison','<=',2000),
            'message' => 'Płaca nie może przekroczyć 2000',
        )
    ),
);
 }
?>