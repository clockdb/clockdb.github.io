# Generated by Django 3.1.4 on 2021-04-22 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0084_auto_20210421_1534'),
    ]

    operations = [
        migrations.AddField(
            model_name='database',
            name='completed',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='database',
            name='progress',
            field=models.FloatField(default=0),
        ),
    ]
