Webcam.set({

    height: 300,
    width: 350,
    image_format: 'png',
    png_quality: 90

});

camera = document.getElementById("camera");

Webcam.attach("camera");

function Capture(){

    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML = "<img src='" + data_uri + "' id='img_picture' >";
    });

}
console.log("ML5 version", ml5.version);

my_classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/kX5ae4ccQ/model.json", model_loaded);

function model_loaded(){

    console.log("Model is loaded");
}

function Identify(){

   my_img =  document.getElementById("img_picture");
    my_classifier.classify(my_img,got_results);

}

function got_results(error, results){

    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_span").innerHTML = results[0].label;
        document.getElementById("accuracy_span").innerHTML = (results[0].confidence * 100).toFixed(2);
    }

}

