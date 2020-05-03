<h1>Edytuj pracownika</h1>
<?php
 $options = array('DYREKTOR' =>'DYREKTOR', 'PROFESOR' =>'PROFESOR', 'ADIUNKT' =>'ADIUNKT', 'ASYSTENT' => 'ASYSTENT', 'SEKRETARKA' =>'SEKRETARKA', 'DOKTORANT' =>'DOKTORANT');
 echo $this->Form->create('Employee');
 echo $this->Form->input('nazwisko');
 echo $this->Form->input('imie');
 echo $this->Form->input('etat',
 array('options'=>$options, 'default'=>'ASYSTENT'));
 echo $this->Form->input('placa_pod');
 echo $this->Form->input('placa_dod');
 echo $this->Form->end('Zapisz');
?>