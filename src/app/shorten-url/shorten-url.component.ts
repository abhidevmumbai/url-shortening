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
  shortenedUrl: string = '';

  @Output() shorteningComplete = new EventEmitter<UrlObject>();

  constructor(private fb: FormBuilder, private apiService: ApiService) {
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
      this.apiService
        .getShortenedUrl(this.form.value.url)
        .subscribe((res: any) => {
          this.shortenedUrl = res.result.full_short_link;
          this.shorteningComplete.emit({
            short: this.shortenedUrl,
            long: this.form.value.url,
          });
        });
    }
  }
}
