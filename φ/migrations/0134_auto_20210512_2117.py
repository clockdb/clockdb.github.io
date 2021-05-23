# Generated by Django 3.1.4 on 2021-05-13 02:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0133_auto_20210512_2111'),
    ]

    operations = [
        migrations.RenameField(
            model_name='industry',
            old_name='Status',
            new_name='db',
        ),
        migrations.RenameField(
            model_name='phase',
            old_name='Status',
            new_name='db',
        ),
        migrations.RemoveField(
            model_name='region',
            name='Region',
        ),
        migrations.AddField(
            model_name='capitalization',
            name='db',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='intrinsicvalue',
            name='db',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='region',
            name='db',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='region',
            name='Description',
            field=models.CharField(max_length=44),
        ),
    ]
