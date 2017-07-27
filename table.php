<?php
  $connect = mysqli_connect("localhost", "root", "root", "po");
  $data = json_decode(file_get_contents("php://input"));
  //echo $data;
  foreach($data as $item) {
    $section_id = $item->section_id;
    $section = $item->section;
    $row = $item->row;
    $odd = $item->odd;
    $low_seat = $item->low_seat;
    $seatqty = $item->seatqty;

    //echo json_encode($item);
     $sql = "INSERT INTO section_po( section_id, section, row, odd, seat_low, seat_qty) values ('$section_id', '$section', '$row', '$odd', '$low_seat','$seatqty')";
     //$sql = "INSERT INTO section(section, row, odd, low_seat, seatqty) values ('section', 'row', 'odd', 'low_seat','seatqty')";
     mysqli_query($connect, $sql);
  }
    echo json_encode($data);

?>
