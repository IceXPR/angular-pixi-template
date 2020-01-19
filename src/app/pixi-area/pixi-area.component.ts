import { Component, OnInit, ViewChild } from '@angular/core';
declare var PIXI: any; // instead of importing pixi like some tutorials say to do use declare

@Component({
  selector: 'app-pixi-area',
  templateUrl: './pixi-area.component.html',
  styleUrls: ['./pixi-area.component.css']
})

export class PixiAreaComponent implements OnInit {
  title = 'my-pixi-app';
  @ViewChild('pixiContainer', null) pixiContainer; // this allows us to reference and load stuff into the div container

  public pApp: any; // this will be our pixi application

  // Aliases
  Application = PIXI.Application;
  loader = PIXI.loader;
  resources = PIXI.loader.resources;
  Sprite = PIXI.Sprite;

  ngOnInit() {

    this.pApp = new this.Application({
      width: 256,
      height: 256,
      antialias: true,
      transparent: false,
      resolution: 1,
    }); // this creates our pixi application

    this.pixiContainer.nativeElement.appendChild(this.pApp.view); // this places our pixi application onto the viewable document
    this.pApp.renderer.backgroundColor = 0x061639;

    // load an image and run the `setup` function when it's done
    this.loader
      .add('catImage', 'assets/bunny.png')
      .on('progress', loadProgressHandler)
      .load(setup.bind(this));

    const rectangle = new PIXI.Graphics();
    rectangle.lineStyle(4, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(0, 0, 64, 64);
    rectangle.endFill();
    rectangle.x = 170;
    rectangle.y = 170;
    this.pApp.stage.addChild(rectangle);

    // This `setup` function will run when the image has loaded
    function setup() {
      console.log('setup: start');

      // Create the cat sprite
      const cat = new this.Sprite(this.resources.catImage.texture);

      // Change the sprite's position

      cat.x = 96;
      cat.y = 96;

      // Add the cat to the stage
      this.pApp.stage.addChild(cat);

      console.log('setup: complete');
    }

    function loadProgressHandler(loader, resource) {

      // Display the file `url` currently being loaded
      console.log('loading: ' + resource.url);

      // Display the percentage of files currently loaded
      console.log('progress: ' + loader.progress + '%');

      // If you gave your files names as the first argument
      // of the `add` method, you can access them like this
      console.log('loading: ' + resource.name);
    }
  }
}
