# Generated by Django 3.1.4 on 2021-05-17 14:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0174_auto_20210517_0936'),
    ]

    operations = [
        migrations.AddField(
            model_name='entity',
            name='Industry',
            field=models.CharField(default='', max_length=61),
        ),
        migrations.AddField(
            model_name='entity',
            name='Industry_db',
            field=models.IntegerField(default=0),
        ),
    ]
