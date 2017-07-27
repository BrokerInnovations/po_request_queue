<?php
  $connect = mysqli_connect("localhost", "root", "root", "po");
  $data = json_decode(file_get_contents("php://input"));
  //echo $data;
  //foreach($dataw as $data) {
    $date_requested = $data->date_req;
    $responsible_user = $data->responsible_user;
    $event = $data->event;
    $event_date = $data->event_date;
    $consignment = $data->consignment;
    $vendor = $data->vendor;
    $tickets_quantity = $data->tickets_quantity;
    $ticket_group_code = $data->ticket_code;
    $cost_of_inventory = $data->cost_inventory;
    $onhand_date = $data->onhand_date;
    $stock_type = $data->stock_type;
    $near_term_delivery_method = $data->delivery_method;
    $internal_po_notes = $data->internal_notes;
    $external_po_notes = $data->external_notes;
    $external_po_num = $data->external_po_number;
    $shipping_notes = $data->shipping_notes;
    $payment_method = $data->payment_method;


    // $sql = "INSERT INTO requested_po(date_requested,responsible_user, event,cost_of_inventory_,onhand_date_)
    // values('$date_requested', '$responsible_user', '$event','$cost_of_inventory','$on-hand_date')";

     $sql = "INSERT INTO requested_po(date_requested, responsible_user, event, event_date, consignment, vendor, quantity,
     ticket_group_code, cost_of_inventory, on_hand_date, stock_type, near_term_delivery_method, internal_po_notes,
      external_po_notes, external_po_num, shipping_notes, payment_method) values ('$date_requested', '$responsible_user', '$event', '$event_date',
      '$consignment', '$vendor', '$tickets_quantity',
      '$ticket_group_code', '$cost_of_inventory', '$onhand_date', '$stock_type', '$near_term_delivery_method', '$internal_po_notes',
        '$external_po_notes', '$external_po_num', '$shipping_notes', '$payment_method')";
     mysqli_query($connect, $sql);

     $last_id = $connect->insert_id;
    echo $last_id;
  // }
    //echo json_encode($data);

?>
