import { Component, OnInit } from '@angular/core';
import { VideoService } from './../../service/video/video.service';
import { AuthService } from './../../auth/auth.service';
import { Video } from './../video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  private token: string;
  videosData: Video[];
  constructor(private videoService: VideoService, private auth: AuthService) {}
 
  ngOnInit() {
    this.token = this.auth.getIdToken();
  }
 
  Video(): void {
    this.videoService.getVideos(this.token).subscribe(result => {
      var baseUrl = result.domain;
      var bucket = result.bucket;
      for (var i = 0; i < result.files.length; i++) {
        var video = result.files[i];
        video.srcurl = baseUrl + '/' + bucket + '/' + video.filename;
      }

      this.videosData = result;
      console.log(result);
    });
  }}
