# Generated by Django 3.1.4 on 2021-05-13 00:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0129_auto_20210512_1806'),
    ]

    operations = [
        migrations.AddField(
            model_name='phase',
            name='Rank',
            field=models.IntegerField(default=0),
        ),
    ]
