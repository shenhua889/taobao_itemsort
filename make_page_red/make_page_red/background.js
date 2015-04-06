// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
	  code:"document.getElementById('J_itemlistCont').innerHTML='<div class=\"pic\"><a id=\"J_Itemlist_PLink_40318175384\" class=\"pic-link J_U2IStat J_ItemPicA\" data-nid=\"40318175384\" href=\"http://detail.tmall.com/item.htm?spm=a230r.1.14.1.7B9fnv&amp;id=40318175384&amp;ad_id=&amp;am_id=&amp;cm_id=140105335569ed55e27b&amp;pm_id=&amp;abbucket=14\" data-href=\"http://detail.tmall.com/item.htm?id=40318175384&amp;ad_id=&amp;am_id=&amp;cm_id=140105335569ed55e27b&amp;pm_id=&amp;abbucket=14\" target=\"_blank\" trace=\"auction\" traceidx=\"0\" trace-index=\"0\" trace-nid=\"40318175384\" trace-num=\"48\" trace-price=\"1299.00\" trace-pid=\"-988769455\" data-spm-anchor-id=\"a230r.1.14.1\"><img id=\"J_Itemlist_Pic_40318175384\" class=\"J_ItemPic img\" src=\"http://g-search2.alicdn.com/img/bao/uploaded/i4/i3/TB1CDGUHXXXXXapXFXXXXXXXXXX_!!0-item_pic.jpg_250x250.jpg_.webp\" data-src=\"http://g-search2.alicdn.com/img/bao/uploaded/i4/i3/TB1CDGUHXXXXXapXFXXXXXXXXXX_!!0-item_pic.jpg\" alt=\"NORTHLAND/诺诗兰Gore-tex三合一GTX绒两件套冲锋衣女春GS032801\"> <iframe id=\"tmp_downloadhelper_iframe\" style=\"display: none;\"></iframe></a></div>'"
  });
});
