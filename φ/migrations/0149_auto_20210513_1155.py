# Generated by Django 3.1.4 on 2021-05-13 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0148_totalcostofsales_totalsales'),
    ]

    operations = [
        migrations.AlterField(
            model_name='capitalization',
            name='Description',
            field=models.CharField(max_length=21),
        ),
        migrations.AlterField(
            model_name='intrinsic',
            name='Description',
            field=models.CharField(max_length=21),
        ),
    ]
