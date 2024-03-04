# Generated by Django 5.0.1 on 2024-03-04 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Song',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('artist', models.CharField(max_length=200)),
                ('albums', models.CharField(max_length=200)),
                ('description', models.CharField(max_length=200)),
                ('year_of_published', models.CharField(max_length=200)),
                ('categorie', models.CharField(default='romance', max_length=200)),
                ('image', models.ImageField(default='default_image.jpg', upload_to='images/')),
                ('audio', models.FileField(default='audio/default_audio.mp3', upload_to='audio/')),
            ],
        ),
    ]