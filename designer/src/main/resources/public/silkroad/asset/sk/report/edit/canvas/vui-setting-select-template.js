define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=b.compId,f=c.$each,g=b.xAxis,h=(b.item,b.$index,"");return h+='<div class="con-comp-setting-type1 j-comp-setting j-comp-select"  data-comp-id="',h+=d(e),h+='" data-comp-type="SELECT">\n    <div class="data-axis-line data-axis-line-48 j-comp-setting-line j-line-x" data-axis-type="x">\n        <span class="letter">维度:</span>\n        ',f(g,function(a){h+='\n        <div class="item hover-bg j-root-line" data-id="',h+=d(a.id),h+='" data-name="',h+=d(a.name),h+='">\n            <span class="item-text j-item-text icon-font" title="',h+=d(a.caption),h+="（",h+=d(a.name),h+='）">\n            ',h+=d(a.caption),h+="（",h+=d(a.name),h+='）\n            </span>\n            <span class="icon hide j-delete" title="删除">×</span>\n        </div>\n        '}),h+='\n    </div>\n    <div class="data-axis-line data-axis-line-48 data-btn-line">\n        <span class="letter">设置:</span>\n        <span>下拉框类型：</span>\n        <select class="select-type" data-comp-id="',h+=d(e),h+='">\n            <option value="ECUI_SELECT" ',b.compMold&&"ECUI_SELECT"===b.compMold&&(h+=' selected="selected"'),h+='>\n                单选\n            </option>\n            <option value="ECUI_MULTI_SELECT" ',b.compMold&&"ECUI_MULTI_SELECT"===b.compMold&&(h+=' selected="selected"'),h+='>\n                多选\n            </option>\n        </select>\n\n        <!-- 单选下拉框默认值 -->\n        <div class="select-default" style="display: inline-block;">\n            <span>&nbsp;&nbsp;下拉框默认值：</span>\n            <span class="select-default-name">\n                全部\n                ',f(g,function(a){h+="\n                    （",h+=d(a.caption),h+="）\n                "}),h+='\n            </span>\n            <input class="select-default-value j-select-default" style="vertical-align: bottom;" type="checkbox" data-comp-id="',h+=d(e),h+='" value="全部（',f(g,function(a){h+=d(a.caption)}),h+='）" />\n        </div>\n        <!--<span>下拉框皮肤：</span>-->\n        <!--<select class="select-skin" data-comp-id="',h+=d(e),h+='">-->\n            <!--<option value="classics" ',b.compSkin&&"classics"===b.compSkin&&(h+=' selected="selected"'),h+='>-->\n            <!--经典样式-->\n            <!--</option>-->\n            <!--<option value="lightblue" ',b.compSkin&&"lightblue"===b.compSkin&&(h+=' selected="selected"'),h+=">-->\n            <!--商桥样式-->\n            <!--</option>-->\n        <!--</select>-->\n    </div>\n</div>"}return{render:b}});