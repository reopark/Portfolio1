$(function(){

    const projectData = [
        {
        num:"01",
        title:"FORMENT Website Renewal",
        desc:"포맨트 웹사이트 개선 프로젝트",
        img:"images/project/forment/main.png",
        link:"project-forment.html"
        },
        {
        num:"02",
        title:"Anew Website Renewal",
        desc:"어뉴 웹사이트 개선 프로젝트",
        img:"images/project/anew/main.png",
        link:"project-anew.html"
        },
        {
        num:"03",
        title:"SHILLA HOTEL Website Renewal",
        desc:"신라호텔 웹사이트 개선 프로젝트",
        img:"images/project/shilla/main.png",
        link:"project-shilla.html"
        }
    ];

    const $list = $('.item_list');
    const $template = $('.item_template');

    projectData.forEach(function(data){

        const $clone = $template.clone();

        $clone.removeClass('item_template');

        $clone.attr('href', data.link);
        $clone.find('img').attr('src', data.img);
        $clone.find('.num').text(data.num);
        $clone.find('.title').text(data.title);
        $clone.find('.desc').text(data.desc);

        $list.append($clone.show());

    });

});