
import { Container, HStack, Link } from '@chakra-ui/react'
import { AudioVideoPlayers } from './Component/AudioVideoPlayers'
import ThreeD from './Component/ThreeD'
import GLTFFiles from './Component/GLTFFiles'
import GLBFiles from './Component/GLBFiles'


export default function Home() {
  return (
    <Container maxW="container.xl" centerContent>
      <HStack spacing={10} mt="50px">
      <Link variant="solid" href='http://localhost:3000/Component/GLBFiles'>View GLB file</Link>
      <Link href='http://localhost:3000/Component/GLTFFiles'>View GLTF file</Link>
      </HStack>
      <AudioVideoPlayers />
      {/* <ThreeD/> */}
    </Container>
  )
}
