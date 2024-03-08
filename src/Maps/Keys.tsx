class Key {
  pressed: boolean = false;
  justPressed: boolean = false;

  Press(keyBoardEvent: KeyboardEvent) {
    // console.log("pressed");
    // console.log(keyBoardEvent);
    this.pressed = true;
    this.justPressed = !keyBoardEvent.repeat;
  }
  Release() {
    this.pressed = false;
    this.justPressed = false;
  }
}

class KeyMap {
  keyDictionary: { [key: string]: Key } = {};

  eventListeners() {
    window.addEventListener("keydown", (e) => {
      if (!(e.key in this.keyDictionary)) {
        this.keyDictionary[e.key] = new Key();
      }
      this.keyDictionary[e.key].Press(e);
    });

    window.addEventListener("keyup", (e) => {
      this.keyDictionary[e.key].Release();
    });
  }

  constructor(attachEventListeners: boolean = true) {
    if (attachEventListeners) {
      this.eventListeners();
    }
  }
}

class FrameKey extends Key {
  Press() {
    // console.log("Frame pressed");
    if (!this.pressed) {
      this.justPressed = true;
    } else {
      this.justPressed = false;
    }
    this.pressed = true;
  }
  Release() {
    this.pressed = false;
    this.justPressed = false;
  }
}

class FrameKeyMap extends KeyMap {
  keyDictionary: { [key: string]: FrameKey } = {};
  initialized = true;
  processKeyMap(keyMap: KeyMap) {
    for (let key in keyMap.keyDictionary) {
      if (!(key in this.keyDictionary)) {
        this.keyDictionary[key] = new FrameKey();
        // console.log(" key added ", key );
      }
      if (keyMap.keyDictionary[key].pressed) {
          this.keyDictionary[key].Press();
        if (key === "0" && this.keyDictionary[key].justPressed) {
            console.log("key 0 pressed");
        }
        
      } else {
        if (key === "0") {
            // console.log("key 0 released");
        }
        this.keyDictionary[key].Release();
      }
    }
  }
  constructor() {
    super(false);
  }
}

// const mapContentsOffSetPosition = new VectorsXY(-60, -30);

export { KeyMap, FrameKeyMap, Key };
