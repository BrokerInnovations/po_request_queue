<?php
//$connect = mysqli_connect("localhost", "root", "root", "po");
   $consignment =  $_POST['consignment'];
  $cost_of_inventory = json_decode($_POST['cost_of_inventory']);
   $date_requested = $_POST['date_requested'];
   $event = $_POST['event'];
  $event_date = $_POST['event_date'];
  $external_po_notes = $_POST['external_po_notes'];
  $external_po_num = $_POST['external_po_num'];
   $id = $_POST['id'];
  $internal_po_notes = $_POST['internal_po_notes'];
  $near_term_delivery_method = $_POST['near_term_delivery_method'];
  $on_hand_date = $_POST['on_hand_date'];
  $payment_method = $_POST['payment_method'];
  $responsible_user = $_POST['responsible_user'];
  $shipping_notes = $_POST['shipping_notes'];
  $stock_type = $_POST['stock_type'];
  $ticket_group_code = $_POST['ticket_group_code'];
  $ticket_quantity = $_POST['ticket_quantity'];
  $vendor = $_POST['vendor'];

  echo $consignment;
  echo $data->date_requested;
  // $data = json_decode($_POST['data']);
  // echo $json_encode($data);
  //echo $data->date_requested;
    // $data = json_decode($_POST['data']);
    // echo $json_encode($data);
   // echo json_encode($data);
  //echo $cost_of_inventory;
  // $sql = "INSERT into test(cost_of_inventory, consignment, date_requested) values
  //                     ('$cost_of_inventory', '$consignment', '$date_requested')";
  // mysqli_query($connect, $sql);
  // $event, $event_date, $external_po_num, $external_po_notes;
  //$data = json_decode(file_get_contents("php://input"));
  // echo $data;
  // echo json_encode($data);

?>
