# Generated by Django 3.1.4 on 2021-05-13 20:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0150_master'),
    ]

    operations = [
        migrations.AddField(
            model_name='master',
            name='capitalizations',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='master',
            name='industries',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='master',
            name='phases',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='master',
            name='regions',
            field=models.IntegerField(default=0),
        ),
    ]
