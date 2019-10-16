jQuery(window).ready(
		function() {

			var gridView;
			var dataProvider;

			var treeView;
			var dataProvider;
			var rows = [ [ "ko", "본점" ], [ "ko.co", "[100000]영업본부" ],
					[ "ko.co.001", "[101000]영업1팀" ],
					[ "ko.co.002", "[102000]영업2팀" ],
					[ "ko.co.003", "[103000]영업3팀" ],
					[ "ko.bo", "[200000]경영지원본부" ],
					[ "ko.bo.001", "[201000]재무회계팀" ],
					[ "ko.bo.002", "[202000]총무팀" ], [ "ov", "지점" ],
					[ "ov.ha", "[600000]경영지원팀" ], [ "ov.ha.001", "경영1" ],
					[ "ov.ha.002", "경영2" ], [ "ov.ha.003", "경영3" ],
					[ "ov.tv", "[700000]테스트" ], [ "ov.tv.001", "테스트1" ],
					[ "ov.tv.002", "테스트2" ] ];

			var initView = function() {
				initGrid();
				$('.zen-form-container1').show();
				$('body').fadeTo("fast", 1);
			}

			var initGrid = function() {

				RealGridJS.setTrace(false);
				RealGridJS.setRootContext("/script");

				dataProvider = new RealGridJS.LocalTreeDataProvider();
				treeView = new RealGridJS.TreeView("grid");
				treeView.setDataSource(dataProvider);

				dataProvider.setFields([ {
					fieldName : "tree"
				}, {
					fieldName : "뉴젠"
				} ]);

				treeView.setColumns([ {
					name : "new",
					fieldName : "뉴젠",
					width : 340
				} ]);

				dataProvider.setRows(rows, "tree", false);
				treeView.setSelectOptions({
					style : 'singleRow'
				});

			}

			$('.zen-tabbar-item').on('click', function(event) {
				$('.zen-tabbar-item').removeClass('active');
				$(this).addClass('active');
				$('.zen-form-container').hide();
				$('.' + $(this).attr('data-target')).show();
			});

			var commonSearch = function() {
				var data = [ {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				}, {
					companyCode : '1001',
					companyName : '테스트회사1',
					gubun : '법인'
				}, {
					companyCode : '1002',
					companyName : '테스트회사2',
					gubun : '일반'
				}, {
					companyCode : '1003',
					companyName : '테스트회사3',
					gubun : '법인'
				}, {
					companyCode : '1004',
					companyName : '테스트회사4',
					gubun : '일반'
				} ];
				dataProvider.fillJsonData(null, {
					fillMode : "set"
				});
				setTimeout(function() {
					dataProvider.fillJsonData(data, {
						fillMode : "set"
					});
				}, 1);
			}
			var commonAdd = function() {
			}
			var commonRemove = function() {
			}
			var commonPrint = function() {
			}
			window.commonButtons = {};
			window.commonButtons.searchFunction = commonSearch;
			window.commonButtons.searchEnabled = true;
			window.commonButtons.addFunction = commonAdd;
			window.commonButtons.addEnabled = false;
			window.commonButtons.removeFunction = commonRemove;
			window.commonButtons.removeEnabled = true;
			window.commonButtons.printFunction = commonPrint;
			window.commonButtons.printEnabled = false;

			initView();

		});
