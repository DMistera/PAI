<h1>Employees</h1>
<p>
 <?php echo $this->Html->link('Dodaj',
 array('action' => 'add')); ?>
</p>
<table>
    <tr>
        <th>Id</th>
        <th>Imie</th>
        <th>Nazwisko</th>
        <th>Etat</th>
        <th></th>
    </tr>
    <?php foreach ($employees as $employee) : ?>
        <tr>
            <td><?php echo $employee['Employee']['id']; ?></td>
            <td>
                <?php echo $this->Html->link(
                    $employee['Employee']['imie'],
                    array('action' => 'view', $employee['Employee']['id'])
                ); ?>
            </td>
            <td>
                <?php echo $employee['Employee']['nazwisko']; ?>
            </td>
            <td>
                <?php echo $employee['Employee']['etat']; ?>
            </td>
            <td>
                <?php echo $this->Html->link(
                    'Usuń',
                    array('action' => 'delete', $employee['Employee']['id']),
                    null,
                    'Czy jesteś pewna(y)?'
                ) ?>
                <?php echo $this->Html->link(
                    'Edytuj',
                    array('action' => 'edit', $employee['Employee']['id'])
                ); ?>
            </td>
        </tr>
    <?php endforeach; ?>
</table>