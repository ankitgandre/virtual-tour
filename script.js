(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init()",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "paddingLeft": 0,
 "scrollBarVisible": "rollOver",
 "paddingRight": 0,
 "overflow": "visible",
 "width": "100%",
 "children": [
  "this.MainViewer"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "class": "Player",
 "verticalAlign": "top",
 "definitions": [{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_40C054FF_7A78_A570_41D8_7579A68416BE",
  "this.overlay_4152F7DD_7A78_A3B0_41C0_6464D89F1AAB",
  "this.overlay_4072B32D_7A78_BC91_41D6_DF3CC063D0EA",
  "this.overlay_400CEC47_7A77_E491_41C9_3D39D8C8A3DB",
  "this.overlay_40E1D103_7A48_9C90_41DD_EF7AF19B61F9",
  "this.overlay_40F9F044_7A48_9C97_41C5_C4E48CE0BFE6",
  "this.overlay_469CE080_7A49_FD8F_41AD_5AADBACDEF0E"
 ],
 "thumbnailUrl": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_t.jpg",
 "id": "panorama_79D672F7_771C_F328_41D2_CBA5F4163633",
 "label": "IMG_20241005_142553_00_143_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7979EA15_771D_32EB_41C4_BCED11CA1243"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_694AC778_79C9_A37F_41A4_B5A1F6FF98C8",
  "this.overlay_68B75A49_79C8_EC91_41DE_36F9604A74AE",
  "this.overlay_6BC38D9E_79C8_E7B3_41D7_EE3B1754402F",
  "this.overlay_6BF8C6C2_79C9_A593_41C1_2D62252DA2A6",
  "this.overlay_6BDC5DA0_79CB_A78F_41C1_A1D82BC4B0F8",
  "this.overlay_6AC17170_79C9_BF70_41CE_6431B57851F4"
 ],
 "thumbnailUrl": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_t.jpg",
 "id": "panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF",
 "label": "IMG_20241005_130425_00_051_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BD96AFA_76EF_F318_41C9_647460844C54"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79A56B56_7713_F169_4197_ACB3A64A4367"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -11.38,
  "class": "PanoramaCameraPosition",
  "pitch": -6.22
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_41899D7D_7A48_6770_41CC_7013171921EA",
  "this.overlay_47476EDB_7A48_A5B1_41C5_866FA8945E57",
  "this.overlay_41BEEDBC_7A48_A7F7_4198_7E75A5DEC39D",
  "this.overlay_474E0556_7A49_A4B3_41DC_DCD6CAAA28D0",
  "this.overlay_46DBFECD_7A49_A591_41D0_C150E471697B",
  "this.overlay_41C53455_7A48_E4B1_41C4_4BD19AC384A3",
  "this.overlay_40704DB1_7A48_67F1_41D4_9343D89472BC",
  "this.overlay_47E5F2C4_7A4B_FD97_41DD_EEBC80D30AE1",
  "this.overlay_4119C815_7A48_ACB1_41C8_68CDC74AACA3"
 ],
 "thumbnailUrl": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_t.jpg",
 "id": "panorama_7979EA15_771D_32EB_41C4_BCED11CA1243",
 "label": "IMG_20241005_143256_00_153(1)",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79D672F7_771C_F328_41D2_CBA5F4163633"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6179C431_7A3B_A4F1_41D8_37CD6C9748E5",
  "this.overlay_6153550C_7A38_A497_41A9_11522101FFAC",
  "this.overlay_6159404C_7A38_7C90_41BB_E7D1AE60754D",
  "this.overlay_66467A21_7A38_EC91_41BB_3ABC22F7E52A",
  "this.overlay_677D0168_7A37_BC9F_41DE_1F6CE97F26C8",
  "this.overlay_6711F55D_7A48_64B1_41CC_2ADB86495BB0",
  "this.overlay_67F4B342_7A48_9C90_41D9_D9B039D567B8",
  "this.overlay_6744158F_7A4B_A791_41D9_AA32550E5BFE",
  "this.overlay_645C0792_7A48_A3B3_41D7_679CC573E70C",
  "this.overlay_6525F025_7A49_9C91_41D2_6E2DDE01844E",
  "this.overlay_652EB4C9_7A48_6591_41C4_D4EF135C2BDE"
 ],
 "thumbnailUrl": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_t.jpg",
 "id": "panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF",
 "label": "IMG_20241005_135158_00_094_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79D672F7_771C_F328_41D2_CBA5F4163633"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7979EA15_771D_32EB_41C4_BCED11CA1243"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 165.71,
  "class": "PanoramaCameraPosition",
  "pitch": 4.08
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_41B2034C_7A48_7C97_41D7_C93BAE24E101",
  "this.overlay_401C6916_7A49_ECB0_41DC_158A4A170DB6",
  "this.overlay_4681C783_7A49_A391_41DC_B2A949B4FD25",
  "this.overlay_4607F214_7A48_FCB7_41B3_3F531CAE9D9C",
  "this.overlay_41776BFA_7A48_6373_41BE_0CF535D647D6",
  "this.overlay_4113C0C1_7A4B_9D91_41BB_8FFAC59EEA0D",
  "this.overlay_40340AF7_7A48_ED70_41CD_6908C912A348",
  "this.overlay_4053EA78_7A48_6D7F_41C3_1948F5937344"
 ],
 "thumbnailUrl": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_t.jpg",
 "id": "panorama_79CD803C_771F_6F18_41D4_91C418EA0D64",
 "label": "IMG_20241005_142345_00_137_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79D672F7_771C_F328_41D2_CBA5F4163633"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7979EA15_771D_32EB_41C4_BCED11CA1243"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -6.48,
  "class": "PanoramaCameraPosition",
  "pitch": -6.73
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_41B9B510_7A58_E48F_41CC_9D4FDB3C0369",
  "this.overlay_3ABA3FA4_7A59_A397_41B6_9934C729CD62",
  "this.overlay_407A0BDB_7A59_A3B1_41B3_BB9CF855C7E8",
  "this.overlay_47B1E259_7A58_BCB1_41DB_CACF3CA7D9DC",
  "this.overlay_403E28AB_7A58_AD91_41B7_B88B5D6FA42C",
  "this.overlay_40FCBCB4_7A5B_A5F7_41A3_54CC07EF76B6",
  "this.overlay_41F4BC39_7A58_A4F1_4195_E30E8F3290F4"
 ],
 "thumbnailUrl": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_t.jpg",
 "id": "panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE",
 "label": "IMG_20241005_141143_00_123_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -14.2,
  "class": "PanoramaCameraPosition",
  "pitch": -9.41
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_camera"
},
{
 "items": [
  {
   "media": "this.panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_camera"
  },
  {
   "media": "this.panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_camera"
  },
  {
   "media": "this.panorama_7A6C809C_7715_2F18_41D5_A65184308AA3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_camera"
  },
  {
   "media": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_camera"
  },
  {
   "media": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_camera"
  },
  {
   "media": "this.panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_camera"
  },
  {
   "media": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_camera"
  },
  {
   "media": "this.panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_camera"
  },
  {
   "media": "this.panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_camera"
  },
  {
   "media": "this.panorama_79A56B56_7713_F169_4197_ACB3A64A4367",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79A56B56_7713_F169_4197_ACB3A64A4367_camera"
  },
  {
   "media": "this.panorama_7BD96AFA_76EF_F318_41C9_647460844C54",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BD96AFA_76EF_F318_41C9_647460844C54_camera"
  },
  {
   "media": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_camera"
  },
  {
   "media": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_camera"
  },
  {
   "media": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_camera"
  },
  {
   "media": "this.panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_camera"
  },
  {
   "media": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_camera"
  },
  {
   "media": "this.panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_camera"
  },
  {
   "media": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_camera"
  },
  {
   "media": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_camera"
  },
  {
   "media": "this.panorama_79D672F7_771C_F328_41D2_CBA5F4163633",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_79D672F7_771C_F328_41D2_CBA5F4163633_camera"
  },
  {
   "media": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B_camera"
  },
  {
   "media": "this.panorama_7979EA15_771D_32EB_41C4_BCED11CA1243",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 158.99,
  "class": "PanoramaCameraPosition",
  "pitch": -5.4
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_camera"
},
{
 "initialPosition": {
  "yaw": 0.57,
  "class": "PanoramaCameraPosition",
  "pitch": -0.09
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_camera"
},
{
 "initialPosition": {
  "yaw": 155.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0.45
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_camera"
},
{
 "initialPosition": {
  "yaw": 16.74,
  "class": "PanoramaCameraPosition",
  "pitch": -4.99
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4184ED77_7A48_A771_41D2_1E2FF39E7667",
  "this.overlay_41B18E4C_7A4B_A497_4190_F9DDD4D0E3F1",
  "this.overlay_471654E0_7A4B_A58F_41D1_E3CEF0E7C0DB",
  "this.overlay_4066FC39_7A48_64F0_41D1_E3DFB58DB1A5",
  "this.overlay_462E4B19_7A48_ECB1_41C1_2BA0E0B1AD2C",
  "this.overlay_405FAEDB_7A48_65B1_41DB_A41A843DA8B9",
  "this.overlay_474A1979_7A49_EF71_41DB_D5ED695AF91E",
  "this.overlay_41DA766B_7A48_6491_41C2_4E3AA28CA3C0",
  "this.overlay_41BB4792_7A48_A3B3_41BF_4667E9F9A432",
  "this.overlay_40D6FFBF_7A4F_A3F1_41D8_DAA835B99183"
 ],
 "thumbnailUrl": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_t.jpg",
 "id": "panorama_6622D380_771D_51E9_41CF_935890A5CE6B",
 "label": "IMG_20241005_142932_00_148_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79D672F7_771C_F328_41D2_CBA5F4163633"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7979EA15_771D_32EB_41C4_BCED11CA1243"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_41AABD7F_7A58_6771_41AB_31D4E63EA578",
  "this.overlay_44FE9E81_7A59_A590_41DD_748ABF122930",
  "this.overlay_38896741_7A59_A491_41D3_54BDFE60300C",
  "this.overlay_4142C701_7A58_E491_41B2_AEACA23A88CD",
  "this.overlay_41E00DED_7A57_E791_41D2_485B664DB041",
  "this.overlay_47B1B2FA_7A57_9D73_41C8_BF33B7C10768",
  "this.overlay_400C4C76_7A48_A573_41DD_132D3038CC91"
 ],
 "thumbnailUrl": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_t.jpg",
 "id": "panorama_789AF8F7_771F_5F28_41C8_94009A5387CA",
 "label": "IMG_20241005_142138_00_132_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79D672F7_771C_F328_41D2_CBA5F4163633"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7979EA15_771D_32EB_41C4_BCED11CA1243"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -62.98,
  "class": "PanoramaCameraPosition",
  "pitch": -3.97
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7BD96AFA_76EF_F318_41C9_647460844C54_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20241005_131839_00_073_1",
 "id": "panorama_79A56B56_7713_F169_4197_ACB3A64A4367",
 "overlays": [
  "this.overlay_6C474C3E_79F8_E4F3_41C6_3D442D188DFF",
  "this.overlay_6C548171_79C8_9F71_41C3_6C1F066F6593",
  "this.overlay_6C702A67_79C9_AC90_41D5_ABC8CF102F15"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_t.jpg",
 "class": "Panorama",
 "hfovMax": 127
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": -323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_camera"
},
{
 "initialPosition": {
  "yaw": -154.06,
  "hfov": 97,
  "class": "PanoramaCameraPosition",
  "pitch": -50.59
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_79A56B56_7713_F169_4197_ACB3A64A4367_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20241005_124621_00_033_1",
 "id": "panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A",
 "overlays": [
  "this.overlay_69354E92_79C8_A5B3_41D1_B0C54DCC971C",
  "this.overlay_76834979_79C9_AF71_41D6_09D6CE088EF3",
  "this.overlay_76BDE93A_79C8_ACF3_41DB_B84E180E6CC9",
  "this.overlay_768E7614_79C8_E4B7_41DB_030AB788D46A",
  "this.overlay_69973F41_79C8_6491_41CE_5D7522EBB044"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BD96AFA_76EF_F318_41C9_647460844C54"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_t.jpg",
 "class": "Panorama",
 "hfovMax": 124
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_674D9608_7714_D2F8_41D4_DDB174E9A58B"
 ],
 "thumbnailUrl": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_t.jpg",
 "id": "panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82",
 "label": "IMG_20241005_121348_00_011",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -11.79,
  "class": "PanoramaCameraPosition",
  "pitch": -1.95
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_79D672F7_771C_F328_41D2_CBA5F4163633_camera"
},
{
 "initialPosition": {
  "yaw": 152.19,
  "class": "PanoramaCameraPosition",
  "pitch": -10.34
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_camera"
},
{
 "initialPosition": {
  "yaw": -158.57,
  "class": "PanoramaCameraPosition",
  "pitch": -7.7
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_camera"
},
{
 "initialPosition": {
  "yaw": -3.74,
  "hfov": 116,
  "class": "PanoramaCameraPosition",
  "pitch": -14.79
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_402C72C9_7A48_9D91_41D5_FF37052A0384",
  "this.overlay_478888A2_7A48_AD93_41D4_307010A7411B",
  "this.overlay_40B01050_7A48_9CB0_41D9_54632A7033A4",
  "this.overlay_475A907C_7A48_7D70_41C6_CB9949E3F08F",
  "this.overlay_40BAE07F_7A48_BD71_41D1_2441AC11B5B9",
  "this.overlay_408EEA9F_7A48_6DB1_41D6_D1355943B810",
  "this.overlay_4098A54F_7A57_E491_41BC_1011C2D81786",
  "this.overlay_4647F516_7A58_E4B3_41C5_0A37F6511C03"
 ],
 "thumbnailUrl": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_t.jpg",
 "id": "panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA",
 "label": "IMG_20241005_135807_00_106_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_670ABAFB_7717_5318_41A9_ABFDD04E0406",
  "this.overlay_76E5760C_79C8_6497_41D6_4D9DBCBB0B37"
 ],
 "thumbnailUrl": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_t.jpg",
 "id": "panorama_7A6C809C_7715_2F18_41D5_A65184308AA3",
 "label": "IMG_20241005_122445_00_021_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6C41F410_79F8_648F_41D4_85FC6ED58069",
  "this.overlay_6CCF3D2E_79F8_6490_4187_3C25F0563A8E",
  "this.overlay_6E7F6421_79F9_A491_41B3_0F6E43DBF810"
 ],
 "thumbnailUrl": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_t.jpg",
 "id": "panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353",
 "label": "IMG_20241005_131523_00_066_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79A56B56_7713_F169_4197_ACB3A64A4367"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "label": "IMG_20241005_122034_00_016",
 "id": "panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6",
 "overlays": [
  "this.overlay_66559BE2_7715_5129_41A0_0665DBCD9197",
  "this.overlay_67628C69_7715_5738_41D5_52F668F33F34",
  "this.overlay_779BBFAE_79C8_A393_41D2_66E02568B215"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A6C809C_7715_2F18_41D5_A65184308AA3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_t.jpg",
 "class": "Panorama",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_63063490_7A37_E58F_41D6_E8C2E9A3159B",
  "this.overlay_63374A54_7A38_ECB7_41B2_07A97BD2234E",
  "this.overlay_601DD929_7A39_EC90_41D5_B3650A1D5EBE",
  "this.overlay_636667C2_7A38_A393_41C2_0EAF16934615",
  "this.overlay_6340D9E0_7A38_6F8F_41D0_965263BAF86A",
  "this.overlay_60CB009D_7A39_9DB1_41DC_9F58442B8F8E",
  "this.overlay_60950D8E_7A38_E793_41B4_6381D51D45DC",
  "this.overlay_6080CADB_7A39_EDB0_41C1_E4B78A785D22",
  "this.overlay_4038CEE2_7A48_E593_41DD_78186B27215C",
  "this.overlay_437009CA_7A49_AF90_41D9_30488109F860"
 ],
 "thumbnailUrl": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_t.jpg",
 "id": "panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C",
 "label": "IMG_20241005_133209_00_087_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79D672F7_771C_F328_41D2_CBA5F4163633"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 154.82,
  "class": "PanoramaCameraPosition",
  "pitch": -0.52
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_6622D380_771D_51E9_41CF_935890A5CE6B_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_405EF9CC_7A4B_AF97_41CF_A769CD37767A",
  "this.overlay_4504C26C_7A48_7C97_41D6_837FCB01EF4B",
  "this.overlay_40299749_7A48_E491_41CA_EEA9DD43E409",
  "this.overlay_47C90CD6_7A49_A5B0_41D7_A58B98C7F9F5",
  "this.overlay_40D675B8_7A49_A7FF_41A3_75294AA263CF",
  "this.overlay_46F4B90D_7A48_EC91_41B9_6CC67D90A8FD",
  "this.overlay_400AD826_7A48_6C93_41D1_DB6C21341F25",
  "this.overlay_4167182A_7A4F_EC93_41C7_88AC383CEDBB"
 ],
 "thumbnailUrl": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_t.jpg",
 "id": "panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE",
 "label": "IMG_20241005_135532_00_100_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -0.97,
  "hfov": 103,
  "class": "PanoramaCameraPosition",
  "pitch": -0.66
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": -18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "linear",
    "yawDelta": -323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   },
   {
    "easing": "cubic_out",
    "yawDelta": -18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 5.31
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_689E5DC2_79D9_A793_41C7_4CAB406AE745",
  "this.overlay_76E361B3_79D8_9FF1_41C3_9B4599CCC1D6",
  "this.overlay_767F2D2D_79DB_A491_41D2_F7E826FEE95B",
  "this.overlay_68872CEC_79D9_A597_41D7_FD4C766E6B2C"
 ],
 "thumbnailUrl": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_t.jpg",
 "id": "panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31",
 "label": "IMG_20241005_124904_00_039_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BD96AFA_76EF_F318_41C9_647460844C54"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 157.86,
  "class": "PanoramaCameraPosition",
  "pitch": -3.91
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_685C0E22_79D8_E493_41D4_2CBCD1F562EE",
  "this.overlay_6B18C95F_79DB_ECB1_4196_33B270F57890",
  "this.overlay_693E2C9A_79CB_A5B3_41D0_2EFEAFD35A96"
 ],
 "thumbnailUrl": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_t.jpg",
 "id": "panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5",
 "label": "IMG_20241005_130036_00_044(1)",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BD96AFA_76EF_F318_41C9_647460844C54"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6ADF6288_79F8_BD90_41DE_0EBFD1332463",
  "this.overlay_6A2392BC_79F8_7DF0_41D8_7787FE52A441",
  "this.overlay_6CD332E2_79F8_9D93_41DA_1CB22719861F",
  "this.overlay_6DE19144_79F9_FC97_41B0_A1BE3EF7986A",
  "this.overlay_6D0AC0C2_79F8_9D93_41DC_268A20FC1C3D",
  "this.overlay_6DFE1F12_79FF_A4B3_41D9_7762883665C3"
 ],
 "thumbnailUrl": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_t.jpg",
 "id": "panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2",
 "label": "IMG_20241005_131100_00_061(1)",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BD96AFA_76EF_F318_41C9_647460844C54"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79A56B56_7713_F169_4197_ACB3A64A4367"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -82.81,
  "class": "PanoramaCameraPosition",
  "pitch": -26.84
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_camera"
},
{
 "initialPosition": {
  "yaw": -3.93,
  "class": "PanoramaCameraPosition",
  "pitch": -4.41
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_camera"
},
{
 "initialPosition": {
  "yaw": -22.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0.81
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_6F7561A0_79CB_FF8F_41D9_FF9E7E7F227F",
  "this.overlay_6F961A32_79C8_ECF3_41C7_0945D65930E7",
  "this.overlay_6EF3BEDB_79C8_A5B1_41D5_04169FC6F641",
  "this.overlay_6EC19261_79C9_BC91_41BB_B7F0D8E5271A",
  "this.overlay_6ECDB2F3_79C8_9D71_41C6_F0C75687BB7A",
  "this.overlay_6E1F2376_79C8_6370_41CC_69BD65190625",
  "this.overlay_61D6236C_79C8_7C97_41DA_8D65A392E3E7",
  "this.overlay_615BCFF9_79C8_6370_41DC_07775F6761A8"
 ],
 "thumbnailUrl": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_t.jpg",
 "id": "panorama_7BD96AFA_76EF_F318_41C9_647460844C54",
 "label": "IMG_20241005_132358_00_077_1",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79A56B56_7713_F169_4197_ACB3A64A4367"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 147.57,
  "class": "PanoramaCameraPosition",
  "pitch": -34.22
 },
 "class": "PanoramaCamera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10,
 "id": "panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_camera"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/f/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/f/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/u/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/u/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/r/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/r/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/b/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/b/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_t.jpg",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/d/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/d/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/l/0/{row}_{column}.jpg",
      "colCount": 8,
      "class": "TiledImageResourceLevel",
      "width": 4096,
      "tags": "ondemand",
      "rowCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/l/1/{row}_{column}.jpg",
      "colCount": 4,
      "class": "TiledImageResourceLevel",
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_4130DC3D_7A59_A4F1_41D8_4ECF54F89193",
  "this.overlay_4018A6FD_7A58_6571_41C2_8D6F81EA7A09",
  "this.overlay_465810E4_7A58_FD97_41D4_D7EF85550FCA",
  "this.overlay_41AD3089_7A5B_BD91_41CA_0F3F119C7C2A",
  "this.overlay_40E2AD34_7A5B_A4F7_41C2_2FAACAD37A27",
  "this.overlay_41897131_7A59_9CF0_41C1_8250C11959A9",
  "this.overlay_40536834_7A58_ACF7_41D1_05D10938813C",
  "this.overlay_4130C109_7A58_FC90_41CC_530871B08C36",
  "this.overlay_4021B348_7A58_9C9F_41AC_356DE872052E",
  "this.overlay_40C6009F_7A5F_FDB1_41B1_62E039DB999A"
 ],
 "thumbnailUrl": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_t.jpg",
 "id": "panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF",
 "label": "IMG_20241005_140127_00_113(1)",
 "class": "Panorama",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_6622D380_771D_51E9_41CF_935890A5CE6B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_789AF8F7_771F_5F28_41C8_94009A5387CA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79D672F7_771C_F328_41D2_CBA5F4163633"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7979EA15_771D_32EB_41C4_BCED11CA1243"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_79CD803C_771F_6F18_41D4_91C418EA0D64"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "paddingLeft": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "width": "100%",
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "propagateClick": false,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "height": "100%",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 0,
 "toolTipShadowHorizontalLength": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "paddingRight": 0,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#000000",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 10,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.71,
   "yaw": 79.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -53.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47371FBC_7A48_63F7_41BF_FB733A4526CE",
   "pitch": -53.37,
   "hfov": 2.71,
   "yaw": 79.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40C054FF_7A78_A570_41D8_7579A68416BE",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.8,
   "yaw": 79.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4737BFBC_7A48_63F7_41D7_4C52E9DF66E0",
   "pitch": -33.03,
   "hfov": 3.8,
   "yaw": 79.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4152F7DD_7A78_A3B0_41C0_6464D89F1AAB",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.79,
   "yaw": 165.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_9_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_47365FBC_7A48_63F7_41D8_9EAAB0C9B0BE",
   "pitch": -39.72,
   "hfov": 2.79,
   "yaw": 165.52,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4072B32D_7A78_BC91_41D6_DF3CC063D0EA",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.53,
   "yaw": 117.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4736EFBC_7A48_63F7_419E_BD5CFB81D28A",
   "pitch": -33.31,
   "hfov": 2.53,
   "yaw": 117.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_400CEC47_7A77_E491_41C9_3D39D8C8A3DB",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.34,
   "yaw": 86.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4736AFBD_7A48_63F1_41D7_BE00E5EDE1D0",
   "pitch": -15.05,
   "hfov": 2.34,
   "yaw": 86.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40E1D103_7A48_9C90_41DD_EF7AF19B61F9",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.35,
   "yaw": 103.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47353FBD_7A48_63F1_41A1_1521C4A46429",
   "pitch": -13.37,
   "hfov": 2.35,
   "yaw": 103.08,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40F9F044_7A48_9C97_41C5_C4E48CE0BFE6",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.07,
   "yaw": 87.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4735DFBD_7A48_63F1_41B8_FF319563B175",
   "pitch": -11.55,
   "hfov": 2.07,
   "yaw": 87.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_469CE080_7A49_FD8F_41AD_5AADBACDEF0E",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.31,
   "yaw": -49.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6D8715DD_79C8_E7B1_41DC_28459F0D60DA",
   "pitch": -40.08,
   "hfov": 2.31,
   "yaw": -49.61,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_694AC778_79C9_A37F_41A4_B5A1F6FF98C8",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.31,
   "yaw": -134.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6D8755DD_79C8_E7B1_41D6_8FD88753B496",
   "pitch": -40.22,
   "hfov": 2.31,
   "yaw": -134.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68B75A49_79C8_EC91_41DE_36F9604A74AE",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.49,
   "yaw": 18.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6D8765DD_79C8_E7B1_41D8_C7F275CADACF",
   "pitch": -34.62,
   "hfov": 2.49,
   "yaw": 18.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6BC38D9E_79C8_E7B3_41D7_EE3B1754402F",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.34,
   "yaw": 85.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6D86A5DD_79C8_E7B1_41D0_0DF6BCD8518F",
   "pitch": -39.39,
   "hfov": 2.34,
   "yaw": 85.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6BF8C6C2_79C9_A593_41C1_2D62252DA2A6",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.52,
   "yaw": 46.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6D86C5DE_79C8_E7B3_41D9_6FCB2FADE945",
   "pitch": -21.94,
   "hfov": 2.52,
   "yaw": 46.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6BDC5DA0_79CB_A78F_41C1_A1D82BC4B0F8",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.7,
   "yaw": -81.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6D8665DE_79C8_E7B3_41D2_B89E3B5499CA",
   "pitch": -26.82,
   "hfov": 2.7,
   "yaw": -81.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6AC17170_79C9_BF70_41CE_6431B57851F4",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.3,
   "yaw": -21.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_9_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_47326FBF_7A48_63F1_41D4_CD2499389C6C",
   "pitch": -40.39,
   "hfov": 2.3,
   "yaw": -21.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41899D7D_7A48_6770_41CC_7013171921EA",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.92,
   "yaw": 21.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47320FC0_7A48_638F_41D9_909A0F5EDD55",
   "pitch": -36.51,
   "hfov": 2.92,
   "yaw": 21.24,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_47476EDB_7A48_A5B1_41C5_866FA8945E57",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.19,
   "yaw": 41.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4732AFC0_7A48_638F_41D6_EE7B9E061F52",
   "pitch": -28.57,
   "hfov": 3.19,
   "yaw": 41.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41BEEDBC_7A48_A7F7_4198_7E75A5DEC39D",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.8,
   "yaw": 60.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47314FC0_7A48_638F_41D8_BCEFFE44E079",
   "pitch": -39.58,
   "hfov": 2.8,
   "yaw": 60.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_474E0556_7A49_A4B3_41DC_DCD6CAAA28D0",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.33,
   "yaw": 53.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4731DFC0_7A48_638F_41C8_B97F3AD9266E",
   "pitch": -15.99,
   "hfov": 2.33,
   "yaw": 53.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_46DBFECD_7A49_A591_41D0_C150E471697B",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.36,
   "yaw": 62.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47318FC1_7A48_6391_41D9_1A97920BCA9B",
   "pitch": -13.07,
   "hfov": 2.36,
   "yaw": 62.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41C53455_7A48_E4B1_41C4_4BD19AC384A3",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.08,
   "yaw": 65.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47300FC1_7A48_6391_41A3_1FCAF7106CB6",
   "pitch": -10.97,
   "hfov": 2.08,
   "yaw": 65.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40704DB1_7A48_67F1_41D4_9343D89472BC",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.08,
   "yaw": 72.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4730CFC1_7A48_6391_41B1_320D2F43E1FA",
   "pitch": -11.38,
   "hfov": 2.08,
   "yaw": 72.15,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_47E5F2C4_7A4B_FD97_41DD_EEBC80D30AE1",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": 71.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_17_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_470F6FC1_7A48_6391_41CB_C9EDC1B453EE",
   "pitch": -14.19,
   "hfov": 2.64,
   "yaw": 71.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4119C815_7A48_ACB1_41C8_68CDC74AACA3",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.99,
   "yaw": -3.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.91
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531242BE_7A5F_BDF3_41D5_8598C88BF7A6",
   "pitch": -48.91,
   "hfov": 1.99,
   "yaw": -3.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6179C431_7A3B_A4F1_41D8_37CD6C9748E5",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.36,
   "yaw": 39.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5312D2BE_7A5F_BDF3_41D6_0432AB14943A",
   "pitch": -38.66,
   "hfov": 2.36,
   "yaw": 39.99,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6153550C_7A38_A497_41A9_11522101FFAC",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.19,
   "yaw": 69.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531282BE_7A5F_BDF3_41D3_41E60761890F",
   "pitch": -43.65,
   "hfov": 2.19,
   "yaw": 69.18,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6159404C_7A38_7C90_41BB_E7D1AE60754D",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.25,
   "yaw": 170.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531362BE_7A5F_BDF3_41D5_54E4957E09CF",
   "pitch": -42.06,
   "hfov": 2.25,
   "yaw": 170.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66467A21_7A38_EC91_41BB_3ABC22F7E52A",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.38,
   "yaw": -54.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5313D2BE_7A5F_BDF3_41C9_6E99FA852111",
   "pitch": -35.98,
   "hfov": 3.38,
   "yaw": -54.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_677D0168_7A37_BC9F_41DE_1F6CE97F26C8",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.9,
   "yaw": 165.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531C52BF_7A5F_BDF1_41B5_A132A5FA2D8F",
   "pitch": -16.3,
   "hfov": 2.9,
   "yaw": 165.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6711F55D_7A48_64B1_41CC_2ADB86495BB0",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.77,
   "yaw": -85.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531C62BF_7A5F_BDF1_41DC_04D9F018C43D",
   "pitch": -23.51,
   "hfov": 2.77,
   "yaw": -85.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67F4B342_7A48_9C90_41D9_D9B039D567B8",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.56,
   "yaw": -87.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531CF2BF_7A5F_BDF1_41D0_75DE39DD5867",
   "pitch": -19.9,
   "hfov": 2.56,
   "yaw": -87.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6744158F_7A4B_A791_41D9_AA32550E5BFE",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.33,
   "yaw": -90.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531D72BF_7A5F_BDF1_41D7_374C9405643F",
   "pitch": -15.94,
   "hfov": 2.33,
   "yaw": -90.11,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_645C0792_7A48_A3B3_41D7_679CC573E70C",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.8,
   "yaw": -103.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531DD2BF_7A5F_BDF1_41CA_45DD9AF03FCC",
   "pitch": -22,
   "hfov": 2.8,
   "yaw": -103.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6525F025_7A49_9C91_41D2_6E2DDE01844E",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.92,
   "yaw": -104.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531DA2BF_7A5F_BDF1_41C1_3A16A97FA01A",
   "pitch": -15.01,
   "hfov": 2.92,
   "yaw": -104.9,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_652EB4C9_7A48_6591_41C4_D4EF135C2BDE",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.56,
   "yaw": -148.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473A3FBA_7A48_63F3_41C0_A8C9EDB82058",
   "pitch": -32.34,
   "hfov": 2.56,
   "yaw": -148.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41B2034C_7A48_7C97_41D7_C93BAE24E101",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.98,
   "yaw": -85.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -49.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473AEFBB_7A48_63F1_41DA_558107497208",
   "pitch": -49.05,
   "hfov": 1.98,
   "yaw": -85.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_401C6916_7A49_ECB0_41DC_158A4A170DB6",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.68,
   "yaw": 86.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -56.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47397FBB_7A48_63F1_4174_63DEDBB4864A",
   "pitch": -56.29,
   "hfov": 1.68,
   "yaw": 86.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4681C783_7A49_A391_41DC_B2A949B4FD25",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.14,
   "yaw": 153.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47390FBB_7A48_63F1_41D4_D3F42314D00E",
   "pitch": -44.87,
   "hfov": 2.14,
   "yaw": 153.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4607F214_7A48_FCB7_41B3_3F531CAE9D9C",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.57,
   "yaw": 94.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4739AFBB_7A48_63F1_41C7_EBA3BD935711",
   "pitch": -19.37,
   "hfov": 2.57,
   "yaw": 94.65,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41776BFA_7A48_6373_41BE_0CF535D647D6",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.61,
   "yaw": 121.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47385FBB_7A48_63F1_41D9_AF37955CE469",
   "pitch": -16.73,
   "hfov": 2.61,
   "yaw": 121.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4113C0C1_7A4B_9D91_41BB_8FFAC59EEA0D",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.58,
   "yaw": 106.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_14_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4738FFBC_7A48_63F7_41B2_BD882FFF4863",
   "pitch": -18.82,
   "hfov": 2.58,
   "yaw": 106.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40340AF7_7A48_ED70_41CD_6908C912A348",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.35,
   "yaw": 102.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47388FBC_7A48_63F7_41D9_CF92CC7C1F2B",
   "pitch": -14.07,
   "hfov": 2.35,
   "yaw": 102.3,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4053EA78_7A48_6D7F_41C3_1948F5937344",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.84,
   "yaw": 7.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473E9FB8_7A48_63FF_41CB_DB5638D6EA7F",
   "pitch": -19.89,
   "hfov": 2.84,
   "yaw": 7.63,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41B9B510_7A58_E48F_41CC_9D4FDB3C0369",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.36,
   "yaw": 1.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473D4FB8_7A48_63FF_41C4_1E0D4937ABC9",
   "pitch": -38.69,
   "hfov": 2.36,
   "yaw": 1.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_3ABA3FA4_7A59_A397_41B6_9934C729CD62",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.56,
   "yaw": 24.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473DEFB9_7A48_63F1_41D7_081BF7BC2ED6",
   "pitch": -32.14,
   "hfov": 2.56,
   "yaw": 24.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_407A0BDB_7A59_A3B1_41B3_BB9CF855C7E8",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.81,
   "yaw": 46.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473D8FB9_7A48_63F1_4181_54E1625EDF38",
   "pitch": -21.84,
   "hfov": 2.81,
   "yaw": 46.62,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_47B1E259_7A58_BCB1_41DB_CACF3CA7D9DC",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.6,
   "yaw": 115.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473C3FB9_7A48_63F1_41C9_5254B3E68273",
   "pitch": -30.61,
   "hfov": 2.6,
   "yaw": 115.83,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_403E28AB_7A58_AD91_41B7_B88B5D6FA42C",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.39,
   "yaw": 52.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473CDFB9_7A48_63F1_41BC_5CBBF531EE21",
   "pitch": -8.58,
   "hfov": 2.39,
   "yaw": 52.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40FCBCB4_7A5B_A5F7_41A3_54CC07EF76B6",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.39,
   "yaw": 73.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_13_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_473C8FB9_7A48_63F1_41C7_4839B264D7F6",
   "pitch": -9.28,
   "hfov": 2.39,
   "yaw": 73.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41F4BC39_7A58_A4F1_4195_E30E8F3290F4",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.85,
   "yaw": -20.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_10_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_47358FBD_7A48_63F1_41C8_054AAD0A0265",
   "pitch": -52.39,
   "hfov": 1.85,
   "yaw": -20.56,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4184ED77_7A48_A771_41D2_1E2FF39E7667",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.36,
   "yaw": -70.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47342FBD_7A48_63F1_41D8_EFBB18DE88BB",
   "pitch": -38.74,
   "hfov": 2.36,
   "yaw": -70.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41B18E4C_7A4B_A497_4190_F9DDD4D0E3F1",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.03,
   "yaw": 21.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4734CFBD_7A48_63F1_41AA_AF85777FFC12",
   "pitch": -47.94,
   "hfov": 2.03,
   "yaw": 21.5,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_471654E0_7A4B_A58F_41D1_E3CEF0E7C0DB",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.53,
   "yaw": -130.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4735FFBE_7A48_63F3_41DA_BD2EE4D69C3D",
   "pitch": -45.73,
   "hfov": 2.53,
   "yaw": -130.84,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4066FC39_7A48_64F0_41D1_E3DFB58DB1A5",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.74,
   "yaw": 50.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47358FBE_7A48_63F3_41CE_D5B36EF99D49",
   "pitch": -24.82,
   "hfov": 2.74,
   "yaw": 50.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_462E4B19_7A48_ECB1_41C1_2BA0E0B1AD2C",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.59,
   "yaw": 59.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47342FBE_7A48_63F3_41DC_6CE1C4B19754",
   "pitch": -18.12,
   "hfov": 2.59,
   "yaw": 59.92,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_405FAEDB_7A48_65B1_41DB_A41A843DA8B9",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.05,
   "yaw": 62.82,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4734BFBE_7A48_63F3_41AB_2755EE821663",
   "pitch": -14.06,
   "hfov": 2.05,
   "yaw": 62.82,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_474A1979_7A49_EF71_41DB_D5ED695AF91E",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.34,
   "yaw": 72.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_17_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47337FBE_7A48_63F3_41D8_FC03B71C07D2",
   "pitch": -15.05,
   "hfov": 2.34,
   "yaw": 72.44,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41DA766B_7A48_6491_41C2_4E3AA28CA3C0",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.57,
   "yaw": 71.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_18_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47331FBF_7A48_63F1_41B2_654B54D99349",
   "pitch": -19.37,
   "hfov": 2.57,
   "yaw": 71.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41BB4792_7A48_A3B3_41BF_4667E9F9A432",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.84,
   "yaw": 90.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_19_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4733CFBF_7A48_63F1_41DD_054C0A848B04",
   "pitch": -20.36,
   "hfov": 2.84,
   "yaw": 90.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40D6FFBF_7A4F_A3F1_41D8_DAA835B99183",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.71,
   "yaw": -148.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473B3FB9_7A48_63F1_4197_8BBD7ABD0B92",
   "pitch": -26.27,
   "hfov": 2.71,
   "yaw": -148.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41AABD7F_7A58_6771_41AB_31D4E63EA578",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.52,
   "yaw": -108.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473BEFB9_7A48_63F1_41CE_FB097F19F382",
   "pitch": -33.65,
   "hfov": 2.52,
   "yaw": -108.16,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_44FE9E81_7A59_A590_41DD_748ABF122930",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.77,
   "yaw": -104.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -54.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473CFFBA_7A48_63F3_41CA_07605A7ED965",
   "pitch": -54.12,
   "hfov": 1.77,
   "yaw": -104.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_38896741_7A59_A491_41D3_54BDFE60300C",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.89,
   "yaw": 174.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_10_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -51.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_473C9FBA_7A48_63F3_41DD_B15F419B4ACA",
   "pitch": -51.33,
   "hfov": 1.89,
   "yaw": 174.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4142C701_7A58_E491_41B2_AEACA23A88CD",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.86,
   "yaw": 78.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473B5FBA_7A48_63F3_41AB_525E8E8A0D13",
   "pitch": -18.71,
   "hfov": 2.86,
   "yaw": 78.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41E00DED_7A57_E791_41D2_485B664DB041",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.7,
   "yaw": 82.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473BFFBA_7A48_63F3_41C8_03F7C80A8844",
   "pitch": -26.68,
   "hfov": 2.7,
   "yaw": 82.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_47B1B2FA_7A57_9D73_41C8_BF33B7C10768",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.83,
   "yaw": 108.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473B9FBA_7A48_63F3_41C5_1118F7ACEF04",
   "pitch": -20.7,
   "hfov": 2.83,
   "yaw": 108.54,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_400C4C76_7A48_A573_41DD_132D3038CC91",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.47,
   "yaw": -155.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531542B6_7A5F_BDF3_41DA_1D7C5052D396",
   "pitch": -35.21,
   "hfov": 2.47,
   "yaw": -155.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C474C3E_79F8_E4F3_41C6_3D442D188DFF",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.53,
   "yaw": 146.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531522B6_7A5F_BDF3_41D5_6142CA3D020E",
   "pitch": -33.29,
   "hfov": 2.53,
   "yaw": 146.39,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C548171_79C8_9F71_41C3_6C1F066F6593",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.77,
   "yaw": 168.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5315E2B6_7A5F_BDF3_41CF_B0E8D2E4707A",
   "pitch": -23.87,
   "hfov": 2.77,
   "yaw": 168.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C702A67_79C9_AC90_41D5_ABC8CF102F15",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.55,
   "yaw": -84.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6B0B8DBC_79C9_A7F7_41D9_51D5A3176EBF",
   "pitch": -46.45,
   "hfov": 3.55,
   "yaw": -84.95,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_69354E92_79C8_A5B3_41D1_B0C54DCC971C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.26,
   "yaw": -117.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6D8A05DC_79C8_E7B7_41D0_720800737566",
   "pitch": -26.14,
   "hfov": 3.26,
   "yaw": -117.8,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_76834979_79C9_AF71_41D6_09D6CE088EF3",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.71,
   "yaw": 100.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6B5C5555_79D8_A4B0_41D2_CDEEE17D7A8F",
   "pitch": -27.21,
   "hfov": 2.71,
   "yaw": 100.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_76BDE93A_79C8_ACF3_41DB_B84E180E6CC9",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.78,
   "yaw": 84.58,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6D8985DC_79C8_E7B7_41A8_A9D82B927E39",
   "pitch": -39.89,
   "hfov": 2.78,
   "yaw": 84.58,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_768E7614_79C8_E4B7_41DB_030AB788D46A",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.57,
   "yaw": 133.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6B094DBC_79C9_A7F7_417A_B87BA0331BD1",
   "pitch": -30.62,
   "hfov": 2.57,
   "yaw": 133.17,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_69973F41_79C8_6491_41CE_5D7522EBB044",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.32,
   "yaw": -34.09,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6D8C85DB_79C8_E7B1_41C4_A6B09FF8B13C",
   "pitch": -16.33,
   "hfov": 2.32,
   "yaw": -34.09,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_674D9608_7714_D2F8_41D4_DDB174E9A58B",
 "data": {
  "label": "Arrow 06b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.52,
   "yaw": 169.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_8_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -56.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_4724AFB5_7A48_63F1_41A6_4C66054B3B01",
   "pitch": -56.32,
   "hfov": 2.52,
   "yaw": 169.21,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_402C72C9_7A48_9D91_41D5_FF37052A0384",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.03,
   "yaw": -94.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47232FB5_7A48_63F1_419B_2C743FE02F3B",
   "pitch": -48.07,
   "hfov": 3.03,
   "yaw": -94.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_478888A2_7A48_AD93_41D4_307010A7411B",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.4,
   "yaw": -128.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4723EFB6_7A48_63F3_41DB_ED5D3CE81BDE",
   "pitch": -43.31,
   "hfov": 4.4,
   "yaw": -128.29,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40B01050_7A48_9CB0_41D9_54632A7033A4",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.23,
   "yaw": -91.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47231FB6_7A48_63F3_41D8_0804A4237D98",
   "pitch": -27.1,
   "hfov": 3.23,
   "yaw": -91.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_475A907C_7A48_7D70_41C6_CB9949E3F08F",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.94,
   "yaw": -106.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4723BFB6_7A48_63F3_41C2_48AB954CC9EC",
   "pitch": -13.51,
   "hfov": 2.94,
   "yaw": -106.46,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40BAE07F_7A48_BD71_41D1_2441AC11B5B9",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.62,
   "yaw": -97.03,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47225FB6_7A48_63F3_41C6_05F1D5CB5A34",
   "pitch": -15.73,
   "hfov": 2.62,
   "yaw": -97.03,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_408EEA9F_7A48_6DB1_41D6_D1355943B810",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.8,
   "yaw": -152.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4722EFB6_7A48_63F3_41DE_2E104918C85F",
   "pitch": -26.16,
   "hfov": 3.8,
   "yaw": -152.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4098A54F_7A57_E491_41BC_1011C2D81786",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -160.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -10.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4722AFB6_7A48_63F3_41D3_EE42092B1BA3",
   "pitch": -10.29,
   "hfov": 2.68,
   "yaw": -160.67,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4647F516_7A58_E4B3_41C5_0A37F6511C03",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.84,
   "yaw": -158.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0_HS_4_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6D8B45DB_79C8_E7B1_41C7_4DA82D0BC3C1",
   "pitch": -20.31,
   "hfov": 2.84,
   "yaw": -158.66,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_670ABAFB_7717_5318_41A9_ABFDD04E0406",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.16,
   "yaw": -144.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -51.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6B0BDDBB_79C9_A7F0_41CC_489786CCCD19",
   "pitch": -51.58,
   "hfov": 4.16,
   "yaw": -144.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_76E5760C_79C8_6497_41D6_4D9DBCBB0B37",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.43,
   "yaw": 82.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531472B6_7A5F_BDF3_41A9_BD5C56EEF775",
   "pitch": -36.43,
   "hfov": 2.43,
   "yaw": 82.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6C41F410_79F8_648F_41D4_85FC6ED58069",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.58,
   "yaw": -152.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531422B6_7A5F_BDF3_41D4_DAD23FA31FBE",
   "pitch": -31.31,
   "hfov": 2.58,
   "yaw": -152.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6CCF3D2E_79F8_6490_4187_3C25F0563A8E",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.5,
   "yaw": 168,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531492B6_7A5F_BDF3_41C9_7AFC0BCAEB5C",
   "pitch": -34.29,
   "hfov": 2.5,
   "yaw": 168,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6E7F6421_79F9_A491_41B3_0F6E43DBF810",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.6,
   "yaw": -48.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -53.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_697202EC_79C9_9D97_41D0_322B8C5916AD",
   "pitch": -53.77,
   "hfov": 3.6,
   "yaw": -48.91,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_66559BE2_7715_5129_41A0_0665DBCD9197",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.15,
   "yaw": 102.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6B3E7824_79D7_AC97_41D6_3C9C4F103A9B",
   "pitch": -29.69,
   "hfov": 3.15,
   "yaw": 102.27,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_67628C69_7715_5738_41D5_52F668F33F34",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.35,
   "yaw": 51.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6D8B35DB_79C8_E7B1_41CE_FAEEEEF63BA8",
   "pitch": -38.94,
   "hfov": 2.35,
   "yaw": 51.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_779BBFAE_79C8_A393_41D2_66E02568B215",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.34,
   "yaw": 30.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_5310B2B7_7A5F_BDF1_41C5_3CCB96661536",
   "pitch": -39.39,
   "hfov": 2.34,
   "yaw": 30.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63063490_7A37_E58F_41D6_E8C2E9A3159B",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.56,
   "yaw": 28.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531162B8_7A5F_BDFF_41C0_0064C9B5043D",
   "pitch": -32.06,
   "hfov": 2.56,
   "yaw": 28.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_63374A54_7A38_ECB7_41B2_07A97BD2234E",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.68,
   "yaw": 52.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5311C2B8_7A5F_BDFF_4188_82A2F4B8D558",
   "pitch": -27.58,
   "hfov": 2.68,
   "yaw": 52.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_601DD929_7A39_EC90_41D5_B3650A1D5EBE",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.73,
   "yaw": -6.89,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5311B2B8_7A5F_BDFF_4171_29A3FEFED74C",
   "pitch": -25.26,
   "hfov": 2.73,
   "yaw": -6.89,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_636667C2_7A38_A393_41C2_0EAF16934615",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.85,
   "yaw": -171.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531202B8_7A5F_BDFF_41C4_57F3BEE37C48",
   "pitch": -19.67,
   "hfov": 2.85,
   "yaw": -171.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6340D9E0_7A38_6F8F_41D0_965263BAF86A",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.85,
   "yaw": -132.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5310A2BD_7A5F_BDF1_41D6_1B80CBADD96B",
   "pitch": -19.64,
   "hfov": 2.85,
   "yaw": -132.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_60CB009D_7A39_9DB1_41DC_9F58442B8F8E",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.91,
   "yaw": -150.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_6_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531132BE_7A5F_BDF3_41D4_0510F3E33837",
   "pitch": -15.77,
   "hfov": 2.91,
   "yaw": -150.47,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_60950D8E_7A38_E793_41B4_6381D51D45DC",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.75,
   "yaw": -38.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5311E2BE_7A5F_BDF3_41D0_A97F23DC4560",
   "pitch": -24.4,
   "hfov": 2.75,
   "yaw": -38.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6080CADB_7A39_EDB0_41C1_E4B78A785D22",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.85,
   "yaw": -44.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_472B8FB2_7A48_63F3_41C9_66F8487EA1F8",
   "pitch": -19.53,
   "hfov": 2.85,
   "yaw": -44.93,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4038CEE2_7A48_E593_41DD_78186B27215C",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.91,
   "yaw": -49.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_472A1FB2_7A48_63F3_41DD_B63D3A1964CB",
   "pitch": -16.04,
   "hfov": 2.91,
   "yaw": -49.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_437009CA_7A49_AF90_41D9_30488109F860",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.61,
   "yaw": -122.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47267FB4_7A48_63F7_4190_1CA0BA0F4ECF",
   "pitch": -16.56,
   "hfov": 2.61,
   "yaw": -122.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_405EF9CC_7A4B_AF97_41CF_A769CD37767A",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.54,
   "yaw": -110.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47261FB4_7A48_63F7_41C9_DE83DF72D29F",
   "pitch": -20.82,
   "hfov": 2.54,
   "yaw": -110.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4504C26C_7A48_7C97_41D6_837FCB01EF4B",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.78,
   "yaw": -96.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4726BFB4_7A48_63F7_41C1_70008F6CAE5E",
   "pitch": -39.97,
   "hfov": 2.78,
   "yaw": -96.77,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40299749_7A48_E491_41CA_EEA9DD43E409",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.37,
   "yaw": 72.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -49.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47255FB4_7A48_63F7_41A8_7C236A8B2BB6",
   "pitch": -49.13,
   "hfov": 2.37,
   "yaw": 72.07,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_47C90CD6_7A49_A5B0_41D7_A58B98C7F9F5",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.67,
   "yaw": 108.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4725FFB5_7A48_63F1_41A1_8A6AAF1D004D",
   "pitch": -42.56,
   "hfov": 2.67,
   "yaw": 108.34,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40D675B8_7A49_A7FF_41A3_75294AA263CF",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.96,
   "yaw": 165.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_13_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_47259FB5_7A48_63F1_41D0_F0CE522B7607",
   "pitch": -11.89,
   "hfov": 2.96,
   "yaw": 165.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_46F4B90D_7A48_EC91_41B9_6CC67D90A8FD",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.69,
   "yaw": 177.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_14_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_47245FB5_7A48_63F1_41B0_A8128C16A3A6",
   "pitch": -8.93,
   "hfov": 2.69,
   "yaw": 177.38,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_400AD826_7A48_6C93_41D1_DB6C21341F25",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.11,
   "yaw": 176.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_15_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_47240FB5_7A48_63F1_41CA_E7EC419A79B4",
   "pitch": -42.69,
   "hfov": 3.11,
   "yaw": 176.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4167182A_7A4F_EC93_41C7_88AC383CEDBB",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.4,
   "yaw": -170.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6B1BBACA_79D8_6D93_41D3_CD3B07563DC6",
   "pitch": -37.44,
   "hfov": 2.4,
   "yaw": -170.19,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_689E5DC2_79D9_A793_41C7_4CAB406AE745",
 "data": {
  "label": "Arrow 06a Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.47,
   "yaw": -65.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -51.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6B045ACA_79D8_6D93_41D3_AE807E1DC35C",
   "pitch": -51.06,
   "hfov": 2.47,
   "yaw": -65.76,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_76E361B3_79D8_9FF1_41C3_9B4599CCC1D6",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.06,
   "yaw": -125.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6B420556_79D8_A4B0_41D5_F354FBA5750A",
   "pitch": -29.31,
   "hfov": 3.06,
   "yaw": -125.49,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_767F2D2D_79DB_A491_41D2_F7E826FEE95B",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.74,
   "yaw": 56.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6AB783B4_79D8_A3F0_4189_84FF40243EE1",
   "pitch": -46.47,
   "hfov": 3.74,
   "yaw": 56.79,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_68872CEC_79D9_A597_41D7_FD4C766E6B2C",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.37,
   "yaw": 58.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -49.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6D8805DD_79C8_E7B1_41DD_F988521DEDED",
   "pitch": -49.25,
   "hfov": 2.37,
   "yaw": 58.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_685C0E22_79D8_E493_41D4_2CBCD1F562EE",
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.25,
   "yaw": 43.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_6D87B5DD_79C8_E7B1_41C0_2776E595C57B",
   "pitch": -26.38,
   "hfov": 3.25,
   "yaw": 43.69,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6B18C95F_79DB_ECB1_4196_33B270F57890",
 "data": {
  "label": "Arrow 06a Left"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.84,
   "yaw": 65.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0_HS_4_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_6D87F5DD_79C8_E7B1_41D5_601A7C177860",
   "pitch": -20.34,
   "hfov": 2.84,
   "yaw": 65.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_693E2C9A_79CB_A5B3_41D0_2EFEAFD35A96",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.42,
   "yaw": -23.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -36.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52EA72B5_7A5F_BDF1_41C9_6364E159EE1F",
   "pitch": -36.74,
   "hfov": 2.42,
   "yaw": -23.96,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6ADF6288_79F8_BD90_41DE_0EBFD1332463",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.58,
   "yaw": 27.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52EA32B5_7A5F_BDF1_41D3_4B634CC5900F",
   "pitch": -31.61,
   "hfov": 2.58,
   "yaw": 27.4,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6A2392BC_79F8_7DF0_41D8_7787FE52A441",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.21,
   "yaw": -93.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52EA82B5_7A5F_BDF1_41DD_DC74231BBD38",
   "pitch": -42.98,
   "hfov": 2.21,
   "yaw": -93.51,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6CD332E2_79F8_9D93_41DA_1CB22719861F",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -71.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_52EB52B5_7A5F_BDF1_41DA_F3B356CC3533",
   "pitch": -27.8,
   "hfov": 2.68,
   "yaw": -71.64,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DE19144_79F9_FC97_41B0_A1BE3EF7986A",
 "data": {
  "label": "Arrow 01 Right"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.68,
   "yaw": -113.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_52EB32B5_7A5F_BDF1_41C0_7A06E419A83F",
   "pitch": -27.71,
   "hfov": 2.68,
   "yaw": -113.98,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6D0AC0C2_79F8_9D93_41DC_268A20FC1C3D",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.29,
   "yaw": -81.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_5_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_52EB92B5_7A5F_BDF1_41D8_20C83442A1CF",
   "pitch": -18.81,
   "hfov": 2.29,
   "yaw": -81.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6DFE1F12_79FF_A4B3_41D9_7762883665C3",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.59,
   "yaw": 158.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_0_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531662B6_7A5F_BDF3_41CE_C74950A7882B",
   "pitch": -31.25,
   "hfov": 2.59,
   "yaw": 158.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F7561A0_79CB_FF8F_41D9_FF9E7E7F227F",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.56,
   "yaw": 146.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531632B7_7A5F_BDF1_41C6_FCB32F42B45E",
   "pitch": -19.79,
   "hfov": 2.56,
   "yaw": 146.43,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6F961A32_79C8_ECF3_41C7_0945D65930E7",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.78,
   "yaw": 50.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_2_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531692B7_7A5F_BDF1_41CF_4D29AAF30F23",
   "pitch": -23.09,
   "hfov": 2.78,
   "yaw": 50.41,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6EF3BEDB_79C8_A5B1_41D5_04169FC6F641",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.51,
   "yaw": -162.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_3_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_531742B7_7A5F_BDF1_41BE_5AFF98025B46",
   "pitch": -34.07,
   "hfov": 2.51,
   "yaw": -162.22,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6EC19261_79C9_BC91_41BB_B7F0D8E5271A",
 "data": {
  "label": "Arrow 01"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.81,
   "yaw": -163.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5317C2B7_7A5F_BDF1_4175_1C4DABFF8C3D",
   "pitch": -21.5,
   "hfov": 2.81,
   "yaw": -163.75,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6ECDB2F3_79C8_9D71_41C6_F0C75687BB7A",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.16,
   "yaw": -118.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531792B7_7A5F_BDF1_41C8_8E7EC3E9FCF0",
   "pitch": -44.54,
   "hfov": 2.16,
   "yaw": -118.05,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_6E1F2376_79C8_6370_41CC_69BD65190625",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.42,
   "yaw": -95.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_531072B7_7A5F_BDF1_41A2_0C1AFA560766",
   "pitch": -27.31,
   "hfov": 2.42,
   "yaw": -95.86,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_61D6236C_79C8_7C97_41DA_8D65A392E3E7",
 "data": {
  "label": "Arrow 01 Right-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.32,
   "yaw": -111.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_5310D2B7_7A5F_BDF1_41A1_536F0AD12C74",
   "pitch": -16.58,
   "hfov": 2.32,
   "yaw": -111.36,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_615BCFF9_79C8_6370_41DC_07775F6761A8",
 "data": {
  "label": "Arrow 01 Left-Up"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 3.18,
   "yaw": -162.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47214FB7_7A48_63F1_41C2_F13E3C0EC005",
   "pitch": -28.69,
   "hfov": 3.18,
   "yaw": -162.87,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4130DC3D_7A59_A4F1_41D8_4ECF54F89193",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.52,
   "yaw": -132.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47210FB7_7A48_63F1_41D4_C9320FBD6EE7",
   "pitch": -46.09,
   "hfov": 2.52,
   "yaw": -132.23,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4018A6FD_7A58_6571_41C2_8D6F81EA7A09",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 1.84,
   "yaw": -41.01,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_12_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -59.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 100,
   "image": "this.AnimatedImageResource_47219FB7_7A48_63F1_41D9_E5C35DE9D4E5",
   "pitch": -59.58,
   "hfov": 1.84,
   "yaw": -41.01,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_465810E4_7A58_FD97_41D4_D7EF85550FCA",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.64,
   "yaw": -91.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47203FB7_7A48_63F1_41D1_CB0C79D412BF",
   "pitch": -43.42,
   "hfov": 2.64,
   "yaw": -91.14,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41AD3089_7A5B_BD91_41CA_0F3F119C7C2A",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.74,
   "yaw": -99.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_4720EFB7_7A48_63F1_41C8_123EB1DE56D3",
   "pitch": -25.04,
   "hfov": 2.74,
   "yaw": -99.25,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40E2AD34_7A5B_A4F7_41C2_2FAACAD37A27",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.37,
   "yaw": -114.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_47209FB7_7A48_63F1_41D4_8EA676BC4848",
   "pitch": -11.75,
   "hfov": 2.37,
   "yaw": -114.73,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_41897131_7A59_9CF0_41C1_8250C11959A9",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.35,
   "yaw": -114.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473F2FB7_7A48_63F0_41AA_6FF706846FE4",
   "pitch": -14.02,
   "hfov": 2.35,
   "yaw": -114.45,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40536834_7A58_ACF7_41D1_05D10938813C",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.61,
   "yaw": -113.88,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_17_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473FCFB8_7A48_63FF_41D3_598EEF1B6A49",
   "pitch": -16.81,
   "hfov": 2.61,
   "yaw": -113.88,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4130C109_7A58_FC90_41CC_530871B08C36",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.91,
   "yaw": -124.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_18_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473E6FB8_7A48_63FF_41CE_E2782F9C28CF",
   "pitch": -15.85,
   "hfov": 2.91,
   "yaw": -124.59,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_4021B348_7A58_9C9F_41AC_356DE872052E",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 2.36,
   "yaw": -124.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_19_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "distance": 50,
   "image": "this.AnimatedImageResource_473E0FB8_7A48_63FF_41CE_F3386CE2F52F",
   "pitch": -12.2,
   "hfov": 2.36,
   "yaw": -124.48,
   "class": "HotspotPanoramaOverlayImage"
  }
 ],
 "id": "overlay_40C6009F_7A5F_FDB1_41B1_62E039DB999A",
 "data": {
  "label": "Circle Point 01a"
 }
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_7_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47371FBC_7A48_63F7_41BF_FB733A4526CE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_8_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4737BFBC_7A48_63F7_41D7_4C52E9DF66E0",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_9_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_47365FBC_7A48_63F7_41D8_9EAAB0C9B0BE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4736EFBC_7A48_63F7_419E_BD5CFB81D28A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_11_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4736AFBD_7A48_63F1_41D7_BE00E5EDE1D0",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_12_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47353FBD_7A48_63F1_41A1_1521C4A46429",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79D672F7_771C_F328_41D2_CBA5F4163633_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4735DFBD_7A48_63F1_41B8_FF319563B175",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6D8715DD_79C8_E7B1_41DC_28459F0D60DA",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6D8755DD_79C8_E7B1_41D6_8FD88753B496",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6D8765DD_79C8_E7B1_41D8_C7F275CADACF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_6D86A5DD_79C8_E7B1_41D0_0DF6BCD8518F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6D86C5DE_79C8_E7B3_41D9_6FCB2FADE945",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7895AF3D_76ED_3118_41D2_0FDAC3BD65EF_0_HS_5_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_6D8665DE_79C8_E7B3_41D2_B89E3B5499CA",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_9_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_47326FBF_7A48_63F1_41D4_CD2499389C6C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47320FC0_7A48_638F_41D9_909A0F5EDD55",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_11_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4732AFC0_7A48_638F_41D6_EE7B9E061F52",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_12_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47314FC0_7A48_638F_41D8_BCEFFE44E079",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4731DFC0_7A48_638F_41C8_B97F3AD9266E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_14_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47318FC1_7A48_6391_41D9_1A97920BCA9B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_15_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47300FC1_7A48_6391_41A3_1FCAF7106CB6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_16_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4730CFC1_7A48_6391_41B1_320D2F43E1FA",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7979EA15_771D_32EB_41C4_BCED11CA1243_0_HS_17_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_470F6FC1_7A48_6391_41CB_C9EDC1B453EE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531242BE_7A5F_BDF3_41D5_8598C88BF7A6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5312D2BE_7A5F_BDF3_41D6_0432AB14943A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531282BE_7A5F_BDF3_41D3_41E60761890F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531362BE_7A5F_BDF3_41D5_54E4957E09CF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5313D2BE_7A5F_BDF3_41C9_6E99FA852111",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_5_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531C52BF_7A5F_BDF1_41B5_A132A5FA2D8F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_6_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531C62BF_7A5F_BDF1_41DC_04D9F018C43D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_7_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531CF2BF_7A5F_BDF1_41D0_75DE39DD5867",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_8_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531D72BF_7A5F_BDF1_41D7_374C9405643F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_9_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531DD2BF_7A5F_BDF1_41CA_45DD9AF03FCC",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BDC2A4F_76F3_D378_41D6_613AE2FEC5DF_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531DA2BF_7A5F_BDF1_41C1_3A16A97FA01A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_8_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473A3FBA_7A48_63F3_41C0_A8C9EDB82058",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_9_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473AEFBB_7A48_63F1_41DA_558107497208",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47397FBB_7A48_63F1_4174_63DEDBB4864A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_11_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47390FBB_7A48_63F1_41D4_D3F42314D00E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_12_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4739AFBB_7A48_63F1_41C7_EBA3BD935711",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47385FBB_7A48_63F1_41D9_AF37955CE469",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_14_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_4738FFBC_7A48_63F7_41B2_BD882FFF4863",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79CD803C_771F_6F18_41D4_91C418EA0D64_0_HS_15_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47388FBC_7A48_63F7_41D9_CF92CC7C1F2B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_7_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473E9FB8_7A48_63FF_41CB_DB5638D6EA7F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_8_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473D4FB8_7A48_63FF_41C4_1E0D4937ABC9",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_9_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473DEFB9_7A48_63F1_41D7_081BF7BC2ED6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473D8FB9_7A48_63F1_4181_54E1625EDF38",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_11_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473C3FB9_7A48_63F1_41C9_5254B3E68273",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_12_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473CDFB9_7A48_63F1_41BC_5CBBF531EE21",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AC6319A_771C_D118_41DC_CA183C05EFDE_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_473C8FB9_7A48_63F1_41C7_4839B264D7F6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_47358FBD_7A48_63F1_41C8_054AAD0A0265",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_11_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47342FBD_7A48_63F1_41D8_EFBB18DE88BB",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_12_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4734CFBD_7A48_63F1_41AA_AF85777FFC12",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4735FFBE_7A48_63F3_41DA_BD2EE4D69C3D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_14_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47358FBE_7A48_63F3_41CE_D5B36EF99D49",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_15_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47342FBE_7A48_63F3_41DC_6CE1C4B19754",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_16_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4734BFBE_7A48_63F3_41AB_2755EE821663",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_17_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47337FBE_7A48_63F3_41D8_FC03B71C07D2",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_18_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47331FBF_7A48_63F1_41B2_654B54D99349",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_6622D380_771D_51E9_41CF_935890A5CE6B_0_HS_19_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4733CFBF_7A48_63F1_41DD_054C0A848B04",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_7_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473B3FB9_7A48_63F1_4197_8BBD7ABD0B92",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_8_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473BEFB9_7A48_63F1_41CE_FB097F19F382",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_9_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473CFFBA_7A48_63F3_41CA_07605A7ED965",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_473C9FBA_7A48_63F3_41DD_B15F419B4ACA",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_11_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473B5FBA_7A48_63F3_41AB_525E8E8A0D13",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_12_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473BFFBA_7A48_63F3_41C8_03F7C80A8844",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_789AF8F7_771F_5F28_41C8_94009A5387CA_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473B9FBA_7A48_63F3_41C5_1118F7ACEF04",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531542B6_7A5F_BDF3_41DA_1D7C5052D396",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531522B6_7A5F_BDF3_41D5_6142CA3D020E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_79A56B56_7713_F169_4197_ACB3A64A4367_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5315E2B6_7A5F_BDF3_41CF_B0E8D2E4707A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6B0B8DBC_79C9_A7F7_41D9_51D5A3176EBF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6D8A05DC_79C8_E7B7_41D0_720800737566",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_5_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_6B5C5555_79D8_A4B0_41D2_CDEEE17D7A8F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_6_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6D8985DC_79C8_E7B7_41A8_A9D82B927E39",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AA8CE90_76ED_33E9_41D1_9F984D70938A_0_HS_7_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6B094DBC_79C9_A7F7_417A_B87BA0331BD1",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B6B8F9C_76EF_7119_41B0_5F6E2BF30E82_0_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_6D8C85DB_79C8_E7B1_41C4_A6B09FF8B13C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_8_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_4724AFB5_7A48_63F1_41A6_4C66054B3B01",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_9_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47232FB5_7A48_63F1_419B_2C743FE02F3B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4723EFB6_7A48_63F3_41DB_ED5D3CE81BDE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_11_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47231FB6_7A48_63F3_41D8_0804A4237D98",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_12_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4723BFB6_7A48_63F3_41C2_48AB954CC9EC",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47225FB6_7A48_63F3_41C6_05F1D5CB5A34",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_14_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4722EFB6_7A48_63F3_41DE_2E104918C85F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7AE0F990_771D_D1E8_41B7_EFCE6EB4CAAA_0_HS_15_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4722AFB6_7A48_63F3_41D3_EE42092B1BA3",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0_HS_4_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ],
 "id": "AnimatedImageResource_6D8B45DB_79C8_E7B1_41C7_4DA82D0BC3C1",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A6C809C_7715_2F18_41D5_A65184308AA3_0_HS_5_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6B0BDDBB_79C9_A7F0_41CC_489786CCCD19",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531472B6_7A5F_BDF3_41A9_BD5C56EEF775",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531422B6_7A5F_BDF3_41D4_DAD23FA31FBE",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A9195CE_7713_5178_41D3_6FF4F74F7353_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531492B6_7A5F_BDF3_41C9_7AFC0BCAEB5C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_697202EC_79C9_9D97_41D0_322B8C5916AD",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0_HS_5_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_6B3E7824_79D7_AC97_41D6_3C9C4F103A9B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BC1273E_76EC_D118_41BD_DEC13A870CB6_0_HS_6_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6D8B35DB_79C8_E7B1_41CE_FAEEEEF63BA8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_5310B2B7_7A5F_BDF1_41C5_3CCB96661536",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531162B8_7A5F_BDFF_41C0_0064C9B5043D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5311C2B8_7A5F_BDFF_4188_82A2F4B8D558",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5311B2B8_7A5F_BDFF_4171_29A3FEFED74C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531202B8_7A5F_BDFF_41C4_57F3BEE37C48",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_5_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5310A2BD_7A5F_BDF1_41D6_1B80CBADD96B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_6_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531132BE_7A5F_BDF3_41D4_0510F3E33837",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_7_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5311E2BE_7A5F_BDF3_41D0_A97F23DC4560",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_8_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_472B8FB2_7A48_63F3_41C9_66F8487EA1F8",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7B62BACD_76F3_337B_41D4_6B557D3AC44C_0_HS_9_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_472A1FB2_7A48_63F3_41DD_B63D3A1964CB",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_8_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47267FB4_7A48_63F7_4190_1CA0BA0F4ECF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_9_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47261FB4_7A48_63F7_41C9_DE83DF72D29F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4726BFB4_7A48_63F7_41C1_70008F6CAE5E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_11_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47255FB4_7A48_63F7_41A8_7C236A8B2BB6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_12_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4725FFB5_7A48_63F1_41A1_8A6AAF1D004D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_47259FB5_7A48_63F1_41D0_F0CE522B7607",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_14_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_47245FB5_7A48_63F1_41B0_A8128C16A3A6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7844F876_771D_7F28_41D2_F7E4FA6070AE_0_HS_15_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_47240FB5_7A48_63F1_41CA_E7EC419A79B4",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6B1BBACA_79D8_6D93_41D3_CD3B07563DC6",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6B045ACA_79D8_6D93_41D3_AE807E1DC35C",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0_HS_5_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_6B420556_79D8_A4B0_41D5_F354FBA5750A",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_786C88DF_76ED_5F17_41D8_AC2E6A0E0C31_0_HS_6_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6AB783B4_79D8_A3F0_4189_84FF40243EE1",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_6D8805DD_79C8_E7B1_41DD_F988521DEDED",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_6D87B5DD_79C8_E7B1_41C0_2776E595C57B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A643A0C_7715_D2F8_41D3_59CB8934EBE5_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_6D87F5DD_79C8_E7B1_41D5_601A7C177860",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_52EA72B5_7A5F_BDF1_41C9_6364E159EE1F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_52EA32B5_7A5F_BDF1_41D3_4B634CC5900F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_52EA82B5_7A5F_BDF1_41DD_DC74231BBD38",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_52EB52B5_7A5F_BDF1_41DA_F3B356CC3533",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_52EB32B5_7A5F_BDF1_41C0_7A06E419A83F",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A6D3FC5_7714_D168_41D7_8BE5C0E5B6C2_0_HS_5_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_52EB92B5_7A5F_BDF1_41D8_20C83442A1CF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531662B6_7A5F_BDF3_41CE_C74950A7882B",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531632B7_7A5F_BDF1_41C6_FCB32F42B45E",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_2_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531692B7_7A5F_BDF1_41CF_4D29AAF30F23",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_3_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_531742B7_7A5F_BDF1_41BE_5AFF98025B46",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_4_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5317C2B7_7A5F_BDF1_4175_1C4DABFF8C3D",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_5_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531792B7_7A5F_BDF1_41C8_8E7EC3E9FCF0",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_6_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_531072B7_7A5F_BDF1_41A2_0C1AFA560766",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7BD96AFA_76EF_F318_41C9_647460844C54_0_HS_7_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_5310D2B7_7A5F_BDF1_41A1_536F0AD12C74",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_10_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47214FB7_7A48_63F1_41C2_F13E3C0EC005",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_11_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47210FB7_7A48_63F1_41D4_C9320FBD6EE7",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_12_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ],
 "id": "AnimatedImageResource_47219FB7_7A48_63F1_41D9_E5C35DE9D4E5",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_13_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47203FB7_7A48_63F1_41D1_CB0C79D412BF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_14_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_4720EFB7_7A48_63F1_41C8_123EB1DE56D3",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_15_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_47209FB7_7A48_63F1_41D4_8EA676BC4848",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_16_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473F2FB7_7A48_63F0_41AA_6FF706846FE4",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_17_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473FCFB8_7A48_63FF_41D3_598EEF1B6A49",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_18_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473E6FB8_7A48_63FF_41CE_E2782F9C28CF",
 "rowCount": 3,
 "frameCount": 9
},
{
 "colCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_7A8C3788_771D_51F9_41D5_C8AE1DBC24DF_0_HS_19_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "id": "AnimatedImageResource_473E0FB8_7A48_63FF_41CE_F3386CE2F52F",
 "rowCount": 3,
 "frameCount": 9
}],
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "mobileMipmappingEnabled": false,
 "desktopMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "shadow": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player445"
 },
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; }
 },
 "layout": "absolute",
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
