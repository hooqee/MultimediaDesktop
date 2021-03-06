/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
Ext.define('Wdesktop.app.UserManager.view.LoginLogList', {
    extend: 'Ext.grid.Panel',
    alias : "widget.loginLogList",
    frame: false,
    multiSelect : true,
    closable : true,
    emptyText: '没有相关数据',
    title : '登录日志',

    initComponent: function() {
        var me = this;
        me.store = me.getCreditsStore();
        Ext.applyIf(me, {
            viewConfig: {
                loadingText: '载入中',
                trackOver: true
            },
            selModel: Ext.create('Ext.selection.CheckboxModel', {

            }),
            dockedItems: [{
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    store: me.store,
                    displayInfo: true,
                    autoShow : true,
					autoDestroy : true
            },{
            	xtype : 'toolbar',
				dock : 'top',
				layout : 'fit',
				defaults : {
					labelWidth : 40
				},
				items: [{
	            	xtype : 'modelSearch',
					parent : me
				}]
            }],
            columns: [{
                    xtype: 'gridcolumn',
                    align: 'center',
                    flex:1,
                    dataIndex : "ipaddress",
                    text: '登录IP'
            },{
                    xtype: 'gridcolumn',
                    flex:1,
                    align: 'center',
                    dataIndex : "loginTime",
                    text: '登录时间'
            },{
                    xtype: 'gridcolumn',
                    align: 'center',
                    flex:1,
                    text: '登录类型',
                    dataIndex : "loginType"
            }],
			enableKeyNav : true,
			columnLines : true
        });
        me.callParent(arguments);
        me.store.load();
    },
    getCreditsStore:function(){
    	return Ext.create('Wdesktop.app.UserManager.store.LoginLogStore');
    }
});
