<?php
class EmployeesController extends AppController
{
    var $name = 'Employees';
    var $helpers = array('Html', 'Form');
    function index()
    {
        $this->set('employees', $this->Employee->find('all'));
    }

    function view($id)
    {
        $this->Employee->id = $id;
        $this->set('employee', $this->Employee->read());
    }

    function add()
    {
        if (!empty($this->data)) {
            if ($this->Employee->save($this->data)) {
                $this->Flash->set('Pracownik został dodany');
                $this->redirect(array('action' => 'index'));
            }
        }
    }

    function delete($id)
    {
        if ($this->Employee->delete($id)) {
            $this->Flash->set('Pracownik został usunięty');
            $this->redirect(array('action' => 'index'));
        }
    }

    function edit($id = null)
    {
        $this->Employee->id = $id;
        if (empty($this->data)) {
            $this->data = $this->Employee->read();
        } else {
            if ($this->Employee->save($this->data)) {
                $this->Flash->set('Pracownik został zmieniony');
                $this->redirect(array('action' => 'index'));
            }
        }
    }
}
?>