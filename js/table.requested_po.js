
/*
 * Editor client script for DB table requested_po
 * Created by http://editor.datatables.net/generator
 */

(function($){
var sectionRule = '';
$(document).ready(function() {
	var requestEditor = new $.fn.dataTable.Editor( {
		ajax: 'php/table.requested_po.php',
		table: '#requested_po',
		fields: [
			{
				"label": "Date Requested:",
				"name": "date_requested",
				"type": "datetime",
				"format": "YYYY-MM-DD"
			},
			{
				"label": "Responsible User",
				"name": "responsible_user"
			},
			{
				"label": "Event:",
				"name": "event"
			},
			{
				"label": "Event Date:",
				"name": "event_date",
				"type": "datetime",
				"format": "YYYY-MM-DD"
			},
			{
        "label":     "Consignment PO:",
        "name":      "consignment",
        "type":      "checkbox",
        "separator": "|",
        "options":   [
            { "label": '', "value": 1 }
        ]
      },
			{
				"label": "Vendor:",
				"name": "vendor"
			},
			{
				"label": "# of tickets:",
				"name": "quantity"
			},
			{
				"label": "Ticket Group Code :",
				"name": "ticket_group_code_"
			},
			{
				"label": "Cost of Inventory :",
				"name": "cost_of_inventory_"
			},
			{
				"label": "On-Hand Date :",
				"name": "on-hand_date_"
			},
			{
				"label": "Stock Type:",
				"name": "stock_type"
			},
			{
				"label": "Near Term Delivery Method :",
				"name": "near_term_delivery_method_"
			},
			{
				"label": "Internal PO Notes:",
				"name": "internal_po_notes"
			},
			{
				"label": "External PO Notes :",
				"name": "external_po_notes_"
			},
			{
				"label": "External PO # :",
				"name": "external_po__"
			},
			{
				"label": "Shipping Notes:",
				"name": "shipping_notes"
			},
			{
				"label": "Payment Method :",
				"name": "payment_method_"
			}
		]
	} );

	var requestTable = $('#requested_po').DataTable( {
		dom: 'Bfrtip',
		scrollCollapse: true,
		scrollX: true,
		scrollY: "300px",
		paging: false,
		ajax: 'php/table.requested_po.php',
		columns: [

			{
				"data": "id"
			},
			{
				"data": "date_requested"
			},
			{
				"data": "responsible_user"
			},
			{
				"data": "event"
			},
			{
				"data": "event_date"
			},
			{
        "data":   "consignment",
        render: function ( data, type, row ) {
            if ( type === 'display' ) {
                return '<input type="checkbox" class="editor-active">';
            }
            return data;
        },
        "className": "dt-body-center"
      },
			{
				"data": "vendor"
			},
			{
				"data": "quantity"
			},
			{
				"data": "ticket_group_code_"
			},
			{
				"data": "cost_of_inventory_"
			},
			{
				"data": "on-hand_date_"
			},
			{
				"data": "stock_type"
			},
			{
				"data": "near_term_delivery_method_"
			},
			{
				"data": "internal_po_notes"
			},
			{
				"data": "external_po_notes_"
			},
			{
				"data": "external_po__"
			},
			{
				"data": "shipping_notes"
			},
			{
				"data": "payment_method_"
			}
		],
		rowId: 'extn',
		select: {
        style: 'single'
    },
		lengthChange: false,
		buttons: [
			{ extend: "create", editor: requestEditor },
			{ extend: "edit",   editor: requestEditor },
			{ extend: "remove", editor: requestEditor }
		],
		rowCallback: function ( row, data ) {
            // Set the checked state of the checkbox in the table
            $('input.editor-active', row).prop( 'checked', data.consignment == 1 );
        }
	} );

	$('#requested_po').on( 'change', 'input.editor-active', function () {
        requestEditor
            .edit( $(this).closest('tr'), false )
            .set( 'consignment', $(this).prop( 'checked' ) ? 1 : 0 )
            .submit();
    } );

	requestEditor.on( 'submitComplete', function (){
		requestTable.ajax.reload(null,false);
	});

	requestTable.buttons().container()
		.appendTo( $('.col-sm-6:eq(0)', requestTable.table().container() ) );


	var sectionEditor = new $.fn.dataTable.Editor( {
		ajax: 'php/table.section.php',
		table: '#section_po',
		fields: [
			{
				"label": "Section Id",
				"name": "section_id"
			},
			{
				"label": "Section",
				"name": "section"
			},
			{
				"label": "Row",
				"name": "row"
			},
			{
        "label":     "Odd:",
        "name":      "odd",
        "type":      "checkbox",
        "separator": "|",
        "options":   [
            { "label": '', "value": 1 }
        ]
      },
			{
				"label": "Lower Seat #",
				"name": "seat_low"
			},
			{
				"label": "Seat Qty",
				"name": "seat_qty"
			}
		]
	} );

	var sectionInsEditor = new $.fn.dataTable.Editor( {
		ajax: 'php/table.sectionIns.php',
		table: '#section_po',
		fields: [
			{
				"label": "Related PO Id",
				"name": "section_id",
				def: function() { return sectionRule;},
				className: "hide"
			},
			{
				"label": "Section",
				"name": "section"
			},
			{
				"label": "Row",
				"name": "row"
			},
			{
        "label":     "Odd:",
        "name":      "odd",
        "type":      "checkbox",
        "separator": "|",
        "options":   [
            { "label": '', "value": 1 }
        ]
      },
			{
				"label": "Lower Seat #",
				"name": "seat_low"
			},
			{
				"label": "Seat Qty",
				"name": "seat_qty"
			}
		]
	} );

	sectionInsEditor.on( 'submitComplete', function (){
		requestTable.ajax.reload(null,false);
		sectionTable.ajax.reload(null,false);
	});

	requestTable.on( 'select', function () {
		sectionTable.buttons().enable();
		sectionTable.ajax.reload();
	});

	requestTable.on( 'deselect', function () {
		sectionTable.ajax.reload();
		sectionTable.buttons().disable();
	});

	var sectionTable = $('#section_po').DataTable( {
		dom: 'fRtBip',
		ajax: {
        url: 'php/table.section.php',
        type: 'post',
        data: function ( d ) {
            var selected = requestTable.row( { selected: true } );
            if ( selected.any() ) {
							d.id = selected.data().id;
							sectionRule = selected.data().id;
           }
        }
    },
		columns: [
			{
				"data": "section_id", visible: 0
			},
			{
				"data": "section"
			},
			{
				"data": "row"
			},
			{
        "data":   "odd",
        render: function ( data, type, row ) {
            if ( type === 'display' ) {
                return '<input type="checkbox" class="editor-active">';
            }
            return data;
        },
        "className": "dt-body-center"
      },
			{
				"data": "seat_low"
			},
			{
				"data": "seat_qty"
			}
		],
		select: {
        style: 'multiple'
    },
		lengthChange: false,
		buttons: [
			{ extend: "create", editor: sectionInsEditor,enabled: false},
			{ extend: "edit",   editor: sectionInsEditor},
			{ extend: "remove", editor: sectionInsEditor}
		],
		rowCallback: function ( row, data ) {
        // Set the checked state of the checkbox in the table
      $('input.editor-active', row).prop( 'checked', data.odd == 1 );
    }
	} );

	$('#section_po').on( 'change', 'input.editor-active', function () {
        sectionInsEditor
            .edit( $(this).closest('tr'), false )
            .set( 'odd', $(this).prop( 'checked' ) ? 1 : 0 )
            .submit();
    } );

	sectionEditor.on( 'submitComplete', function() {
		sectionTable.ajax.reload(null,false);
	});

});

}(jQuery));
