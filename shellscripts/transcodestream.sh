#!/bin/bash
while getopts s:a: flag
do
    case "${flag}" in
        s) source=${OPTARG};;
        a) alias=${OPTARG};;        
    esac
done
INITIAL_WORKING_DIRECTORY=$(pwd)
AUDIO_OPTS="-c:a aac -b:a 160000 -ac 2"
VIDEO_OPTS="-s 640x480 -r 15 -c:v h264_videotoolbox -b:v 8000K"
OUTPUT_HLS="-hls_flags delete_segments -hls_time 5 -hls_list_size 2 -start_number 1"
rm -rf "$(pwd)/public/streams/$alias"
mkdir -p "$(pwd)/public/streams/$alias"
ffmpeg -i "$source" -an $VIDEO_OPTS $OUTPUT_HLS $(pwd)/public/streams/$alias/stream.M3U8 &
printf "{\"alias\":\"$alias\",\"pid\":$!}"

#ffmpeg -i "$source" -an -s 640x480 -r 15 -c:v h264_videotoolbox -b:v 8000K -hls_flags delete_segments -hls_time 5 -hls_list_size 2 -start_number 1 $(pwd)/public/streams/$alias/stream.M3U8