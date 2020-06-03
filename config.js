module.exports={
    title:'Diseño Web',
    descripcion:'Creacion de Paginas Web y App',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Contenido', link: '/guia/' },
          { text: 'External', link: 'https://google.com' }
        ],
        sidebar:{
            '/guia/':[
                '',
                'cv',
                '',
                //'david'
            ]
        }
        
        
      }
}