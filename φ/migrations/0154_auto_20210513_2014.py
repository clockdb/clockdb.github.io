# Generated by Django 3.1.4 on 2021-05-14 01:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0153_auto_20210513_1551'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='capitalization',
            name='Description',
        ),
        migrations.AddField(
            model_name='capitalization',
            name='dbp',
            field=models.IntegerField(default=0),
        ),
    ]
