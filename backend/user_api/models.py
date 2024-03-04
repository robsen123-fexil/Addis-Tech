
from django.db import models
class Song(models.Model):
    title=models.CharField(max_length=100)
    artist = models.CharField(max_length=200)
    albums=models.CharField(max_length=200)
    description=models.CharField(max_length=200)
    year_of_published=models.CharField(max_length=200)
    categorie=models.CharField(max_length=200, default='romance')
    image = models.ImageField(upload_to='images/', default='default_image.jpg')
    audio=models.FileField(upload_to='audio/' ,  default='audio/default_audio.mp3')
    def __str__(self):
        return self.artist