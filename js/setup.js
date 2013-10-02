(function(document, Showdown){
    var converter = new Showdown.converter();
    var html = converter.makeHtml('Hello *World*');

    var container = document.createElement('div');
    container.setAttribute('class', 'words');
    container. innerHTML = html;

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(container);
})(document, Showdown);
