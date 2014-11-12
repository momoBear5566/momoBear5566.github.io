function copyToClipboard(txt) {
    // IE 可透過 window.cipboardData 物件，直接存取剪貼簿
    if (window.clipboardData) {
        // clearData() 方法可清除剪貼簿內容，會傳回 boolean
        window.clipboardData.clearData();
        // setData() 方法可將資料寫入剪貼簿，會傳回 boolean
        var result = window.clipboardData.setData("Text", txt);
        // 考慮 IE8 以後版本可關閉剪貼簿功能，因此須判別是否成功將內容寫入剪貼簿
        if (!result) { return false; }
    }
        // firefox 在 config 設定的情況下也可存取剪貼簿，但要考慮無法存取的情況
    else if (window.netscape) {
        try { netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect"); }
        catch (e) { return false; }
        var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
        if (!clip) { return false; }
        var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
        if (!trans) { return false; }
        trans.addDataFlavor('text/unicode');
        var str = new Object();
        var len = new Object();
        var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
        var copytext = txt;
        str.data = copytext;
        trans.setTransferData("text/unicode", str, copytext.length * 2);
        var clipid = Components.interfaces.nsIClipboard;
        if (!clip) { return false; }
        clip.setData(trans, null, clipid.kGlobalClipboard);
    }
        // chrome & safari 無法存取剪貼簿物件，所以直接傳回 false
    else { return false; }

    return true;
}
