# Generated by Django 3.1.4 on 2021-04-22 16:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0085_auto_20210421_2114'),
    ]

    operations = [
        migrations.AddField(
            model_name='database',
            name='onboarded',
            field=models.IntegerField(default=0),
        ),
    ]
