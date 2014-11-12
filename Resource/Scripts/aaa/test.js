function copyToClipboard(txt) {
    // IE �i�z�L window.cipboardData ����A�����s���ŶKï
    if (window.clipboardData) {
        // clearData() ��k�i�M���ŶKï���e�A�|�Ǧ^ boolean
        window.clipboardData.clearData();
        // setData() ��k�i�N��Ƽg�J�ŶKï�A�|�Ǧ^ boolean
        var result = window.clipboardData.setData("Text", txt);
        // �Ҽ{ IE8 �H�᪩���i�����ŶKï�\��A�]�����P�O�O�_���\�N���e�g�J�ŶKï
        if (!result) { return false; }
    }
        // firefox �b config �]�w�����p�U�]�i�s���ŶKï�A���n�Ҽ{�L�k�s�������p
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
        // chrome & safari �L�k�s���ŶKï����A�ҥH�����Ǧ^ false
    else { return false; }

    return true;
}
