
//Key is a class that has the two boolean atrributes of pressed and justPressed
class Key {
  pressed: boolean = false;
  justPressed: boolean = false;

//the press method takes a keyBoardEvent as an argument evaluating if a key is pressed
  Press(keyBoardEvent: KeyboardEvent) {
    this.pressed = true;
//{what is the purpose of the repeat attribute?}
//so the justPressed is more like an already pressed where it's false if the input received is the first one and true if it's repeating
    this.justPressed = !keyBoardEvent.repeat;
//since this is inverted it will print true and then false false false false...
  }
  framePress() {
    if (!this.pressed) {
      this.justPressed = true;
    } else {
      this.justPressed = false;
    }
    this.pressed = true;
  }
    
//the release method sets the pressed and justPressed attributes to false
  Release() {
    this.pressed = false;
//justPressed needs to be set to false here or the key will be stuck in the justPressed true state{wait, not it won't}
    this.justPressed = false;
  }
}

class KeyMap {
//keyDictionary is an object array that has the keys {what is key exactly?} as a string 
//{is this an arrray of objects Key that have a property named key?}
  keyDictionary: { [key: string]: Key } = {};

//the eventListeners method watches for the keydown and keyup events and calls the Press and Release methods
  eventListeners() {
    window.addEventListener("keydown", (e) => {
        //so if an event key without the attribute key is not in the keyDictionary object array then it will be added to it
      if (!(e.key in this.keyDictionary)) {
        this.keyDictionary[e.key] = new Key();
      }
      //if the event key is in the keyDictionary object array then the Press method is called
      this.keyDictionary[e.key].Press(e);
    });

    window.addEventListener("keyup", (e) => {
        //when the keyup event is triggered the Release method is called and the property of pressed and justPressed are set as false
      this.keyDictionary[e.key].Release();
    });
  }
  processKeyMap(keyMap: KeyMap) {
    for (let key in keyMap.keyDictionary) {
      if (!(key in this.keyDictionary)) {
        this.keyDictionary[key] = new Key();
        // console.log(" key added ", key );
      }
      if (keyMap.keyDictionary[key].pressed) {
          this.keyDictionary[key].framePress();
        
      } else {
        this.keyDictionary[key].Release();
      }
    }
  }
//the constructor makes a KeyMap object and calls the eventListeners method if the argument is true 
  constructor(attachEventListeners: boolean = true) {
    if (attachEventListeners) {
      this.eventListeners();
    }
  }
}


// const mapContentsOffSetPosition = new VectorsXY(-60, -30);

export { KeyMap, Key };
