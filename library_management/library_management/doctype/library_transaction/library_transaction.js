// Copyright (c) 2023, yash and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Transaction', {
	onload: function(frm){
		frm.set_query('article', () => {
			return {
				filters: {
					isbn: ['is','set']
				}
			}
		})
	},
});
