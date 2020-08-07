 $(function() {
     //加载出商品信息
     //ajax请求
     $.ajax({
        url: './data/goods.json',
        type: 'get',
        datetype: 'json',
        success: function(jsonArr){//返回的是一个json数组
            $.each(jsonArr,function(index,item){
                var goodsDom =`
                <div class="goods">
                    <img src="${item.imgurl}" alt="">
                    <p>${item.price}</p>
                    <h3>${item.title}</h3>
                    <div code = "${item.code}">加入购物车</div>
                </div> `;
                $('.content').append(goodsDom);
            })
        }
     })


            //点击加入购物车
        $('.content').on('click','.goods div',function() {
        var goodsArr = [];
        if(localStorage.getItem('goods')){
            goodsArr = JSON.parse(localStorage.getItem('goods'));
        }
        var code = $(this).attr('code');
        //标记是加入过购物车
        var flag = false;
        $.each(goodsArr,function(index,item){
            if(item.code === code) {
                flag = true;
                item.num ++;
                return false;
            }
            
        })
        if(!flag){
            goodsArr.push({"code":code,"num":1});
        }
        //这个地方保存数据  转化为字符存储进去！！！
        localStorage.setItem('goods',JSON.stringify(goodsArr));
        alert('加入购物车成功！');
        })



 })
