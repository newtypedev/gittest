jQuery(window).ready(function() {
	
	var gridView;
	var dataProvider;
	
	var initView = function() {
		initGrid();
		$('.zen-form-container1').show();
		$('body').fadeTo("fast", 1);
	}
	
	var initGrid = function() {
		
		dataProvider = new RealGridJS.LocalDataProvider();
	    gridView = new RealGridJS.GridView("realgrid");
	    gridView.setDataSource(dataProvider);
	    
	    dataProvider.setFields([{
	        fieldName: "textField"
	      }, {
	        fieldName: "numberField",
	        dataType: "number"
	      }]);

	      gridView.setColumns([{
	        fieldName: "textField",
	        name: "textColumn",
	        width: 200,
	        header: {text: "Text Column"},
	        filterActions : [{
	          name: "filterAction1",
	          text: "filter 선택" 
	        }],
	        filters : [{
	          name: "A",
	          criteria: "value = 'A'",
	          hidden: true
	        }, {
	          name: "B",
	          criteria: "value = 'B'",
	          hidden: true       
	        }, {
	          name: "C",
	          criteria: "value = 'C'",
	          hidden: true      
	        }, {
	          name: "D",
	          criteria: "value = 'D'",
	          hidden: true      
	        }]
	      }, {
	        fieldName: "numberField",
	        name: "numberColumn",
	        width: 200,
	        header: {text: "Number Column"}
	      }]);

	      dataProvider.setRows([{
	        textField: "A",
	        numberField: 1
	      }, {
	        textField: "B",
	        numberField: 2
	      }, {
	        textField: "C",
	        numberField: 3
	      }, {
	        textField: "D",
	        numberField: 4
	      }, {
	        textField: "E",
	        numberField: 5
	      }]);

	      gridView.onFilterActionClicked = function(grid, column, action, x, y) {
	        var filterName = prompt("A에서 D사이의 글자를 입력해주세요.", "A");
	        if (filterName.length != 1 || filterName < "A" || filterName > "D") {
	          alert("A에서 D까지 한글자만 입력바랍니다.")
	          return;
	        }

	        gridView.activateAllColumnFilters(column, false);
	        gridView.activateColumnFilters(column, filterName, true);
	      };
		/*var columns = [ 
			{name:"col1" ,fieldName : "empCode".trim(), width: 190, header : {text : "사번       ".trim() }, styles : {textAlignment : "center", foreground:"#ff000000"}, editable:true},
			{name:"col2" ,fieldName : "empName".trim(), width: 190, header : {text : "성명(한글)           ".trim() }, styles : {textAlignment : "center", foreground:"#ff0000ff"}, editable:true},
		];
		var setFields = function(provider) {
		    var fields = [];
		    $.each(columns, function(index, value) {
		        fields.push({fieldName:value.fieldName});
		    });
		    provider.setFields(columns);
		}
		var setColumns = function(grid) {
		    grid.setColumns(columns);
		}
		var setOptions = function(grid) {
			gridView.setOptions({
		        panel : {
		            visible : false
		        },
		        footer : {
		            visible : false
		        },
		        checkBar : {
		            visible : false
		        },
		        stateBar : {
		            visible : false
		        },
		        edit : {
		            insertable : false,
		            appendable : false,
		            updatable : false,
		            deletable : false,
		            deleteRowsConfirm : false,
		            deleteRowsMessage : "Are you sure?"
		        }
		    });
			gridView.setDisplayOptions({
		        rowHeight: 32,
		        focusColor:"#ff1C90FB"
		    });
			gridView.setEditOptions({
		    	editable: true,
		    	updatable: true  
		    });
			gridView.setHeader(
		        {height : 32}
		    );
			gridView.setStyles(zen.gridStyles);
		}
		RealGridJS.setAssetRoot("/js/realgrid/assets");
	    dataProvider = new RealGridJS.LocalDataProvider();
	    gridView = new RealGridJS.GridView("grid");
	    gridView.setDataSource(dataProvider);
	    setFields(dataProvider);
	    setColumns(gridView);
	    setOptions(gridView);
	    
	    gridView.setSelectOptions({
    	  style: 'singleRow'
    	});*/
	    
	    
	}
	
	$('.zen-tabbar-item').on('click',function(event){
		$('.zen-tabbar-item').removeClass('active');
		$(this).addClass('active');
		$('.zen-form-container').hide();
		$('.'+$(this).attr('data-target')).show();
	});
	
/*	var commonSearch = function() {
		var data = [
			{empCode:'191001',empName:'홍길동'},
			{empCode:'191002',empName:'홍길동1'},
			{empCode:'191003',empName:'홍길동2'},
			{empCode:'191004',empName:'홍길동3'},
			{empCode:'191005',empName:'홍길동4'},
			{empCode:'191006',empName:'홍길동5'},
			{empCode:'191007',empName:'홍길동6'},
			{empCode:'191008',empName:'홍길동7'},
			{empCode:'191009',empName:'홍길동8'},
			{empCode:'191011',empName:'홍길동9'},
			{empCode:'191012',empName:'홍길동10'},
			{empCode:'191013',empName:'홍길동11'},
			{empCode:'191014',empName:'홍길동12'},
			{empCode:'191015',empName:'홍길동13'},
			{empCode:'191016',empName:'홍길동14'},
			{empCode:'191017',empName:'홍길동15'},
			{empCode:'191018',empName:'홍길동16'},
			{empCode:'191019',empName:'홍길동17'},
			{empCode:'191020',empName:'홍길동18'},
			{empCode:'191021',empName:'홍길동19'},
			{empCode:'191022',empName:'홍길동20'},
			{empCode:'191023',empName:'홍길동21'},
			{empCode:'191024',empName:'홍길동22'},
			{empCode:'191025',empName:'홍길동23'},
			{empCode:'191026',empName:'홍길동24'},
			{empCode:'191027',empName:'홍길동25'},
			{empCode:'191028',empName:'홍길동26'},
			{empCode:'191029',empName:'홍길동27'},
			{empCode:'191030',empName:'홍길동28'},
			{empCode:'191031',empName:'홍길동29'},
			{empCode:'191101',empName:'홍길동30'}
			
		];
		dataProvider.fillJsonData(null, {fillMode: "set"});
		setTimeout(function(){
			dataProvider.fillJsonData(data, {fillMode: "set"});
		},1);
	}*/
	var commonAdd = function() {
	}
	var commonRemove = function() {
	}
	var commonPrint = function() {
	}
	window.commonButtons = {};
	/*window.commonButtons.searchFunction = commonSearch;*/
	window.commonButtons.searchEnabled = true;
	window.commonButtons.addFunction = commonAdd;
	window.commonButtons.addEnabled = true;
	window.commonButtons.removeFunction = commonRemove;
	window.commonButtons.removeEnabled = true;
	window.commonButtons.printFunction = commonPrint;
	window.commonButtons.printEnabled = false;
	
	initView();
	
});

