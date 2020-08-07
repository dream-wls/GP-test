$(function (){
    //这个是另一个购物车页面
    //首先判断本地存储有没有数据
    if(localStorage.getItem('goods')) {
        //有数据 
        var goodsArr = JSON.parse(localStorage.getItem('goods'));
        //这个是购物车中的 你加入的记录
        $.ajax({
            url:'./data/goods.json',
            type:'get',
            dataType:'json',
            success: function(jsonArr) {
                $.each(goodsArr,function(index,item){
                    $.each(jsonArr,function(i,obj) {//这个是仓库中的数据
                        if(item.code === obj.code) {
                            var goodsDom = `
                            <li>
                                <img src="${obj.imgurl}" alt="">
                                <h3>${obj.title}</h3>
                                <p>${obj.price}</p>
                                <button class="btn1" code="${obj.code}">-</button>
                                <span>${item.num}</span>
                                 <button class="btn2" code="${obj.code}">+</button>
                                <em code="${obj.code}">删除</em>
                            </li>
                            `;
                            // 然后添加到里面
                            $('.list').append(goodsDom);
                        }
                    })
                })
            }
        });
    }
    //当我们点击删除按钮时
    $('.list').on('click','li em',function(e) {
        //我们要把数据从本地localStorage 去掉
        // 我们首先要把数据给移除
        $.each(goodsArr,function(index,item) {
            if(item.code == $(this).attr('code'));
                //就删掉
                goodsArr.splice(index,1);
                //删掉后就不用循环了
                return false;
        });
        //把数据更新掉本地存储
        localStorage.setItem('goods',JSON.stringify(goodsArr));

        //然后删除页面节点
        $(this).parent().remove();

    })
    //当我们点击左右按钮的时候
    // 点击 - 按钮的时候
    $('.list').on('click','.btn1',function() {
        //改变页面节点的数据
        var num = $(this).siblings('span').text();
        num --;
        if(num == 0){
            num = 1;
        }
        $(this).siblings('span').text(num);
        console.log(num);
        //遍历goodsArr  
        $.each(goodsArr,function(index,item) {
            
        })
        
        //我们要更新localstoreage里的数据
        // localStorage.setItem('good')
    })
})
