<?php
$connect = mysqli_connect("localhost", "root", "root", "po");
if(isset($_POST["submit"])) {
	if($_FILES['file']['name']) {
		$filename = explode(".",$_FILES['file']['name'] );
		if($filename[1] === 'csv') {
			$handle = fopen($_FILES['file']['tmp_name'], "r");
			fgetcsv($handle);
			while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
				$item1 = mysqli_real_escape_string($connect, $data[0]);
				$item2 = mysqli_real_escape_string($connect, $data[1]);
				$item3 = mysqli_real_escape_string($connect, $data[2]);
				$item4 = mysqli_real_escape_string($connect, $data[3]);
				$sql = "INSERT into section_po(section_id, section, row, seat) values ('$item1', '$item2', '$item3', '$item4')";
				mysqli_query($connect, $sql);
			}
			fclose($handle);
			header('Location: index.php');
		}
	}
}
?>

<!doctype html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />

		<title>PO Request Queue</title>

		<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/bs-3.3.7/jq-2.2.4/dt-1.10.15/b-1.3.1/b-colvis-1.3.1/cr-1.3.3/rr-1.2.0/sc-1.4.2/se-1.2.2/datatables.min.css">
		<link rel="stylesheet" type="text/css" href="css/generator-base.css">
		<link rel="stylesheet" type="text/css" href="css/editor.bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap-grid.min.css">

		<script type="text/javascript" charset="utf-8" src="https://cdn.datatables.net/v/bs-3.3.7/jq-2.2.4/dt-1.10.15/b-1.3.1/b-colvis-1.3.1/cr-1.3.3/rr-1.2.0/sc-1.4.2/se-1.2.2/datatables.min.js"></script>
		<script type="text/javascript" charset="utf-8" src="js/dataTables.editor.min.js"></script>
		<script type="text/javascript"
 src="//cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
		<script type="text/javascript" charset="utf-8" src="js/editor.bootstrap.min.js"></script>
		<script type="text/javascript" charset="utf-8" src="js/table.requested_po.js"></script>
	</head>
	<body class="bootstrap">
		<section>
			<header>
				<nav class="navbar-fixed-top navbar-default">
					<ul class="nav nav-tabs">
            <li role="presentation" class="active"><a href="#">Requested PO's</a></li>
            <li role="presentation"><a href="/complete.html">Completed PO's</a></li>
          </ul>
				</nav>
			</header>
		</section>
		<section style="padding-top:64px;">
			<div class="container-fluid">

				<h3 class="text-center">
					Requested PO's</span>
				</h3>

				<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="requested_po" width="100%">
					<thead>
						<tr>
							<th>Requested PO Id</th>
							<th>Date Requested</th>
							<th>Responsible User</th>
							<th>Event</th>
							<th>Event Date</th>
							<th>Consignment PO</th>
							<th>Vendor</th>
							<th># of tickets</th>
							<th>Ticket Group Code </th>
							<th>Cost of Inventory</th>
							<th>On-Hand Date</th>
							<th>Stock Type</th>
							<th>Near Term Delivery Method </th>
							<th>Internal PO Notes</th>
							<th>External PO Notes</th>
							<th>External PO #</th>
							<th>Shipping Notes</th>
							<th>Payment Method</th>
						</tr>
					</thead>
				</table>
				<hr/>
				<div id="button">

					<form method="post" enctype="multipart/form-data" class="row">
						Upload CSV: <input type="file" name="file" class="col-md-3">
						<input type="submit" name="submit" value="Upload" class="btn btn-sm btn-primary col-md-1" title="Upload .csv file in the format below">
					</form>
					<table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered" id="section_po" width="100%">
						<thead>
							<tr>
								<th>Section Id</th>
								<th>Section</th>
								<th>Row</th>
								<th>Odd</th>
								<th>Lower Seat #</th>
								<th>Seat Qty</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</section>
	</body>
</html>
