import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

interface UrlObject {
  short: string;
  long: string;
}

@Component({
  selector: 'app-shorten-url',
  templateUrl: './shorten-url.component.html',
  styleUrls: ['./shorten-url.component.scss'],
})
export class ShortenUrlComponent implements OnInit {
  form: FormGroup;
  shortenedUrl: string | null = null;

  @Output() shorteningComplete = new EventEmitter<UrlObject>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      url: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
          ),
        ],
      ],
    });
  }

  ngOnInit() {}

  shorten() {
    if (this.form.valid) {
      console.log(this.form.value.url);
      // this.apiService.getShortenedUrl(this.form.value.url).subscribe((res) => {
      //   console.log(res);
      //   // this.shortenedUrl = res;
      // });
    }
  }
}
