import { Box, VStack, Input, Button, Heading, Stack, Grid } from "@chakra-ui/react";
import { useState } from "react";
import React from 'react'
import ReactPlayer from 'react-player'


export const AudioVideoPlayers = () => {
  const [files, setFiles] = useState()
  const [filess, setFiless] = useState()
  async function onChangeFiles(e) {
    const file = e.target.value
    if (file.includes("C:")) {
      const value = file.slice(12)
      setFiles(value)
    } else {
      setFiles(file)
    }
  }

  return (
    <Box mt="50px" >
      <Box>
        <VStack align="center" spacing={2} mb="10px">
          <Input type="file" onChange={onChangeFiles} />
          <Input type="url" onChange={(e) => setFiles(e.target.value)} placeholder="URL of Video or Audio" />
        </VStack>
        <Box maxH="400px" align="center">
          <ReactPlayer url={`../Files/${files}`} controls playing />
          {files}
        </Box>
      </Box>
      <Grid templateColumns='repeat(3, 1fr)' gap={6} mt="20px" mb="50px">
        <VStack maxH="400px" align="center">
          <Heading fontSize="lg">.mp4 files</Heading>
          <video width="300px" src="../Files/PSYCHEDELIC BOYZ - RAWSTARR 'TIL I DIE (BATANG PASAWAY).mp4" controls />
        </VStack>
        <VStack maxH="400px" align="center">
          <Heading fontSize="lg">.webm files</Heading>
          <video width="300px" src="../Files/file_example_WEBM_1920_3_7MB.webm" controls />
        </VStack>
        <VStack maxH="400px" align="center">
          <Heading fontSize="lg">.ogv files</Heading>
          <video width="300px" src="../Files/sample_960x400_ocean_with_audio.ogv" controls />
        </VStack>
        <VStack maxH="400px" align="center">
          <Heading fontSize="lg">.m4v files</Heading>
          <video width="300px" src="../Files/sample_960x400_ocean_with_audio.m4v" controls />
        </VStack>
        <VStack align="center" justifyContent="center">
          <Heading fontSize="lg">.oga  audio files</Heading>
          <video height="20px" src="../Files/sample1.oga" controls />
        </VStack>
      </Grid>
      
      <Heading align="center" fontSize="lg">Audio files</Heading>
      <Stack direction={['column', 'row']} spacing={5}>
        <VStack Box maxH="mp3" align="center" justifyContent="center">
          <Heading fontSize="lg">.mp3 files</Heading>
          <audio width="300px" src="../Files/PSYCHEDELIC BOYZ - RAWSTARR 'TIL I DIE (BATANG PASAWAY).mp3" controls />
        </VStack>
        <VStack Box maxH="400px" align="center" justifyContent="center">
          <Heading fontSize="lg">.ogg files</Heading>
          <audio width="300px" src="../Files/file_example_OGG_640_2_7mg.ogg" controls />
        </VStack>
        <VStack Box maxH="400px" align="center" justifyContent="center">
          <Heading fontSize="lg">.wav files</Heading>
          <audio width="300px" src="../Files/file_example_WAV_5MG.wav" controls />
        </VStack>

      </Stack>

    </Box>
  )
}