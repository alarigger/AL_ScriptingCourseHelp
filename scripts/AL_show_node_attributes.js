function Show_node_attributes(){


    if (selection.numberOfNodesSelected() != 1) {
    MessageLog.trace("Please select only one node");
    return;
    }
    var sNode = selection.selectedNode(0);
    var attrList = node.getAttrList(sNode,frame.current(),"");
    var repport = []
    repport.push("NODE SCRIPT INFORMATIONS : ");
    repport.push("* Name: ("+sNode+")");
    repport.push("* Type: ("+node.type(sNode)+")");
    repport.push("* Attributes : ");

    var all_attributes = []
    for(var j=0; j<attrList.length; j++)
        {
            var attr = attrList[j];
            var value = node.getTextAttr(sNode,frame.current(),attr.keyword())
            repport.push("-->  "+get_arrow(attr.keyword())+"         type ( "+attr.typeName()+" ) value =  ( "+value+" ) ");
            all_attributes.push(attr)
            if(attr.hasSubAttributes()){
                add_to_array(attrList,attr.getSubAttributes())
                add_to_array(all_attributes,attr.getSubAttributes())
                
            }
            
            
        }    
        
    for(var j=0; j<all_attributes.length; j++)
    {
        var attr = all_attributes[j];
        var value = node.getTextAttr(sNode,frame.current(),attr.keyword())
        repport.push("-->  "+get_arrow(attr.keyword())+" type ( "+attr.typeName()+" ) value =  ( "+value+" ) ");
        
    }
    MessageLog.trace(repport.join("\n"));
    MessageBox.information(repport.join("\n"));

            
    function add_to_array(_arrayA,_arrayB){
        for(var j=0; j<_arrayB.length; j++){
            _arrayA.push(_arrayB[j])
        }

    }

    function get_arrow(_string){
        var six_to_add = 30-_string.length
        var arrow = ""
        for(var i = 0 ; i < six_to_add ; i++){
           arrow+="-"
        }
        return _string+arrow+""
    }


}