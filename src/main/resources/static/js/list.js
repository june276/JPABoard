$(function(){
    $("[name='pageRows']").change(function(){
    	// alert($(this).val());
		var frm = $("[name='frmPageRows']");
		frm.attr("method", "POST");
		frm.attr("action", "pageRows");
		frm.submit();
    });
});