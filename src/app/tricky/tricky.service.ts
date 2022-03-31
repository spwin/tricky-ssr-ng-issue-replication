import { isPlatformServer } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const stateKey = makeStateKey<string>('ProjectGoogleStaticIage');

@Injectable({
  providedIn: 'root',
})
export class TrickyService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private transferState: TransferState
  ) {}

  getMessage(): string {
    if (isPlatformServer(this.platformId)) {
      const message = `This is only set on server`;
      this.transferState.set(stateKey, message);
      return message;
    }

    return this.transferState.get(stateKey, 'Something is wrong!');
  }
}
