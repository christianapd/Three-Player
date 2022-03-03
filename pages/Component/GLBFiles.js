import { Box, Container } from '@chakra-ui/react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Scene, PerspectiveCamera, WebGLRenderer, ACESFilmicToneMapping, sRGBEncoding, EquirectangularReflectionMapping } from 'three'
import { useEffect } from 'react'

export default function GLBFiles() {
  let camera, scene, renderer
  function ThreeDViewer() {
    const container = document.getElementById('mainBox')
		document.body.appendChild( container )
    camera = new PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 )
		camera.position.set( - 1.8, 0.6, 2.7 )
    scene = new Scene()
    new RGBELoader()
    .setPath( '../Files/' )
    .load('container_free_Ref.hdr', function ( texture ) {
      texture.mapping = EquirectangularReflectionMapping
      scene.background = texture
      scene.environment = texture
      render()
      const loader = new GLTFLoader().setPath( '../Files/ghost-in-the-shell-geisha-mask/source/' );
      loader.load( 'model.glb', function ( gltf ) {
        scene.add( gltf.scene )
        render()
      })
    })
    renderer = new WebGLRenderer( { antialias: true } )
    renderer.setPixelRatio( window.devicePixelRatio )
    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1
    renderer.outputEncoding = sRGBEncoding
    container.appendChild( renderer.domElement )
    const controls = new OrbitControls( camera, renderer.domElement )
    controls.addEventListener( 'change', render )
    controls.minDistance = 2
    controls.maxDistance = 10
    controls.target.set( 0, 0, - 0.2 )
    controls.update()

    window.addEventListener( 'resize', onWindowResize() )
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize( window.innerWidth, window.innerHeight )

    render()
  }

  function render() {
    renderer.render(scene, camera)
  }

  useEffect(() => {
    ThreeDViewer()
    render()
  }, [])

  return (
    <Box id='mainBox'>

    </Box>
    
  )
}